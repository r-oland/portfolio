import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { html, text } from 'utils/email';

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as {
      email: string;
      message: string;
    };

    if (!data) throw new Error('No body');

    const { email } = data;
    const message = data.message.replace(/\n/g, '<br />');

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
      text: text({ email, message }),
      html: html({ email, message }),
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
