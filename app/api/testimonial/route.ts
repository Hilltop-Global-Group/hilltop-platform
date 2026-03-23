import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { student_name, email, program, year, quote } = body;

    if (!student_name || !quote) {
      return NextResponse.json({ error: 'Name and testimonial are required' }, { status: 400 });
    }

    const wpApiUrl = process.env.NEXT_PUBLIC_HILLTOP_API_URL;

    if (wpApiUrl) {
      const wpRes = await fetch(`${wpApiUrl}/testimonial`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_name, email, program, year, quote }),
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
