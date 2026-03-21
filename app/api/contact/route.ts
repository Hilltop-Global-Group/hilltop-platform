import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Forward to the business email via a simple mailto log or
    // integrate with a transactional email provider here.
    // For now we just acknowledge the submission successfully.
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
