import { Listing } from "@prisma/client";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.MAILER_FROM_EMAIL as string,
    pass: process.env.MAILER_FROM_PASSWORD as string,
  },
});

export async function sendListingEMail(listing: Listing) {
  const info = await transporter.sendMail({
    from: '"Ali Mi6 👻" <alihussnain.mi6@mgil.com>',
    to: "ali.hussnain112003@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
}
