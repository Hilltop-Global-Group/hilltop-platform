import { NextResponse } from 'next/server';

const recentSubmissions = new Map<string, number>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { student_name, email, role, organization, program, year, quote, rating, website, _t } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json({ ok: true, message: 'Thank you!' });
    }

    // Timing check
    if (_t && Date.now() - _t < 2000) {
      return NextResponse.json({ ok: true, message: 'Thank you!' });
    }

    // Rate limiting - 1 testimonial per email per 10 minutes
    const now = Date.now();
    const key = (email || '').toLowerCase();
    const lastTime = recentSubmissions.get(key);
    if (lastTime && now - lastTime < 600_000) {
      return NextResponse.json({ error: 'Please wait before submitting another testimonial' }, { status: 429 });
    }
    recentSubmissions.set(key, now);
    for (const [k, v] of recentSubmissions) {
      if (now - v > 1200_000) recentSubmissions.delete(k);
    }

    if (!student_name || !email || !quote) {
      return NextResponse.json({ error: 'Name, email, and testimonial are required' }, { status: 400 });
    }

    const wpApiUrl = process.env.NEXT_PUBLIC_HILLTOP_API_URL;

    if (wpApiUrl) {
      const wpRes = await fetch(`${wpApiUrl}/testimonial`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_name, email, role, organization, program, year, quote, rating }),
      });

      if (!wpRes.ok) {
        console.error('WordPress testimonial API error:', await wpRes.text());
        return NextResponse.json({ error: 'Failed to submit testimonial' }, { status: 500 });
      }

      const data = await wpRes.json();
      return NextResponse.json(data);
    } else {
      console.log('Testimonial submission (no WP API configured):', body);
      return NextResponse.json({ ok: true, message: 'Testimonial received (dev mode)' });
    }
  } catch (error) {
    console.error('Testimonial route error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
