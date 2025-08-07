
"use server";

import * as z from "zod";
import nodemailer from "nodemailer";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name, email, message } = parsed.data;

  const { GMAIL_EMAIL, GMAIL_APP_PASSWORD } = process.env;

  if (!GMAIL_EMAIL || !GMAIL_APP_PASSWORD) {
    console.error("Gmail credentials are not set in .env");
    return { success: false, message: "Server configuration error." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_EMAIL,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // Use your Gmail address as sender
    to: 'support@r-3.in', // The recipient of the email
    replyTo: email, // Set the user's email as the reply-to address
    subject: `Inquiry from our website - R-3.in`,
    text: message,
    html: `<p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    };
  }
}