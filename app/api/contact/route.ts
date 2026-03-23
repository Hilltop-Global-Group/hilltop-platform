import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, program, message } = body;

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
