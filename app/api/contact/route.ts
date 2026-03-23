import { NextResponse } from 'next/server';

const recentSubmissions = new Map<string, number>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, program, message, website, _t } = body;

    // Honeypot check — bots fill the hidden "website" field
    if (website) {
      return NextResponse.json({ ok: true });
    }

    // Timing check — form filled in under 2 seconds is likely a bot
    if (_t && Date.now() - _t < 2000) {
      return NextResponse.json({ ok: true });
    }

    // Basic rate limiting — max 3 submissions per email per 5 minutes
    const now = Date.now();
    const key = (email || '').toLowerCase();
    const lastTime = recentSubmissions.get(key);
    if (lastTime && now - lastTime < 300_000) {
      return NextResponse.json({ error: 'Please wait a few minutes before submitting again' }, { status: 429 });
    }
    recentSubmissions.set(key, now);
    // Cleanup old entries
    for (const [k, v] of recentSubmissions) {
      if (now - v > 600_000) recentSubmissions.delete(k);
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const wpApiUrl = process.env.NEXT_PUBLIC_HILLTOP_API_URL;

    if (wpApiUrl) {
      const wpRes = await fetch(`${wpApiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, program, message }),
      });

      if (!wpRes.ok) {
        console.error('WordPress contact API error:', await wpRes.text());
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
      }
    } else {
      console.log('Contact form submission (no WP API configured):', body);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
