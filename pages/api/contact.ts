import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { html, text } from 'utils/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const { message, email } = JSON.parse(req.body) as {
        email: string;
        message: string;
      };

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

      res.status(200).json({ status: 'OK' });
    }
  } catch (err: any) {
    console.error(err);
    return res.status(500).send(err?.message || err);
  }
}
