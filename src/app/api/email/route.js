import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "977053001@smtp-brevo.com",
    pass: process.env.BREVO_SMTP_KEY
  }
});

export async function POST(request) {
  const {name, email, message} = await request.json();

  // Send the email
  const mailOptions = {
    from: `"Rishab Portfolio" <contact@rishab.online>`,
    to: "rishabsiingh@outlook.com",
    replyTo: email,
    subject: `New Message from ${name}`,
    html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px;">
            <h1>New message from your portfolio!</h1>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> ${email}</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
