import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { html, text } from 'utils/email';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;
// Humans need at least a few seconds to fill in the form
const MIN_FILL_TIME_MS = 3000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json().catch(() => null)) as {
      email?: unknown;
      message?: unknown;
      website?: unknown;
      startedAt?: unknown;
    } | null;

    if (!data) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Honeypot: real visitors never see this field, bots fill it in.
    // Pretend it worked so bots don't learn to skip it.
    if (typeof data.website === 'string' && data.website.trim() !== '') {
      return NextResponse.json({ status: 'OK' });
    }

    // Reject submissions that skip the form or are sent too fast
    const startedAt = Number(data.startedAt);
    if (!startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const email = typeof data.email === 'string' ? data.email.trim() : '';
    const rawMessage =
      typeof data.message === 'string' ? data.message.trim() : '';

    if (
      !EMAIL_REGEX.test(email) ||
      email.length > 254 ||
      rawMessage.length < MIN_MESSAGE_LENGTH ||
      rawMessage.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const message = escapeHtml(rawMessage).replace(/\n/g, '<br />');

    const transporter = nodemailer.createTransport({
      port: parseFloat(process.env.EMAIL_SERVER_PORT || '0'),
      host: process.env.EMAIL_SERVER_HOST,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      secure: false,
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify((error, success) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server is ready to take our messages');
          resolve(success);
        }
      });
    });

    const mailData = {
      from: 'contact@rolandbranten.nl',
      to: 'info@rolandbranten.nl',
      subject: `Contact request: ${email}`,
      replyTo: email,
      text: text({ email, message: rawMessage }),
      html: html({ email: escapeHtml(email), message }),
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    return NextResponse.json({ status: 'OK' });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message || err }, { status: 500 });
  }
}
