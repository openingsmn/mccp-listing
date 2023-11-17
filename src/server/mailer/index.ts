import nodemailer from "nodemailer";
import generateEmailTemplate from "./template";
import { IListingSubmission } from "@/typing/db";

const MAILER_EMAIL = process.env.MAILER_FROM_EMAIL as string;
const RECEIVER_EMAIL = process.env.MAILER_TO_EMAIL as string;
const MAILER_FROM_NAME = process.env.MAILER_FROM_NAME as string;
const MAILER_PWD = process.env.MAILER_FROM_PASSWORD as string;

const transporter = nodemailer.createTransport({
  service: "gmail",
  // host: "smtp.hostinger.com",
  secure: true,
  // port: 465,
  auth: {
    user: MAILER_EMAIL,
    pass: MAILER_PWD,
  },
});

export async function sendListingEmail(
  submision: IListingSubmission
): Promise<boolean> {
  if (!RECEIVER_EMAIL) return false;
  // if (!submision.email) return false;
  try {
    const info = await transporter.sendMail({
      from: `"${MAILER_FROM_NAME}" <${MAILER_EMAIL}>`,
      to: RECEIVER_EMAIL,
      subject: "",
      text: "",
      html: generateEmailTemplate(submision),
    });

    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// import Queue from "bee-queue";
// import { IListingSubmission } from "@/typing/db";
// const mailerQueue = new Queue<MailerJobData>("listing-mailer", {});

// export type MailerJobData = {
//   listing: IListingSubmission;
// };

// mailerQueue.on("ready", () => {
//   mailerQueue.process(async ({ data: { listing } }) => {
//     return await sendListingEmailSync(listing);
//   });
// });

// export async function sendListingEmailAsync(listing: IListingSubmission) {
//   await mailerQueue.createJob({ listing }).setId(listing.id).save();
// }
