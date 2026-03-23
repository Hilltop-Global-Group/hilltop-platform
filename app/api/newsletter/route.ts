import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;

    if (!apiKey || !listId) {
      console.log('Newsletter signup (Mailchimp not configured):', email);
      return NextResponse.json({ ok: true, message: 'Subscribed (dev mode)' });
    }

    const dc = apiKey.split('-').pop();

    const res = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        tags: ['Website Signup'],
      }),
    });

    if (res.ok) {
      return NextResponse.json({ ok: true, message: 'Successfully subscribed' });
    }

    const data = await res.json();

    if (data.title === 'Member Exists') {
      return NextResponse.json({ ok: true, message: 'Already subscribed' });
    }

    console.error('Mailchimp error:', data);
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  } catch (error) {
    console.error('Newsletter route error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
