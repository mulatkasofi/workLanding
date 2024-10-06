import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, link } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'aakkkiivv@mail.ru',
        pass: 'dpprxiixhnet99auagZC',
      },
    });

    const mailOption = {
      from: 'aakkkiivv@mail.ru',
      to: 'aakkkiivv@mail.ru',
      subject: 'Заявка с рабочего сайта',
      html: `
        <li> Имя: ${name}</li>
        <li> Ссылка: ${link}</li> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: 'Email Sent Successfully' },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to Send Email' },
      { status: 500 },
    );
  }
}
