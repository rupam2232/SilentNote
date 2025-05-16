import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const html = await render(VerificationEmail({ username, otp: verifyCode }));
    await transporter.sendMail({
      from: `"${process.env.SERVER_NAME}" <${process.env.EMAIL}>`,
      to: email,
      subject: "Verify your email",
      html: html,
      headers: { 'X-Email-Category': 'Email Verification' },
    });

    return {
      success: true,
      message: "Verification email send successfully.",
    };
  } catch (error) {
    console.error("Error sending verification email:", error);
    return {
      success: false,
      message: "Failed to send verification email.",
    };
  }
}
