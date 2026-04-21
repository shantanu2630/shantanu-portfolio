import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import {
  ContactRequestSchema,
  ContactResponseSchema,
} from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (value === undefined) {
    return fallback;
  }

  return value === "true";
}

function getMailerConfig() {
  const host = process.env["SMTP_HOST"];
  const rawPort = process.env["SMTP_PORT"];
  const user = process.env["SMTP_USER"];
  const pass = process.env["SMTP_PASS"];
  const to = process.env["CONTACT_TO_EMAIL"];
  const from = process.env["CONTACT_FROM_EMAIL"] ?? user;

  if (!host || !rawPort || !user || !pass || !to || !from) {
    return null;
  }

  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid SMTP_PORT value: "${rawPort}"`);
  }

  return {
    host,
    port,
    secure: parseBoolean(process.env["SMTP_SECURE"], port === 465),
    auth: { user, pass },
    to,
    from,
  };
}

router.post("/contact", async (req, res) => {
  const parsedBody = ContactRequestSchema.safeParse(req.body);

  if (!parsedBody.success) {
    return res.status(400).json(
      ContactResponseSchema.parse({
        ok: false,
        message: parsedBody.error.issues[0]?.message ?? "Invalid request body.",
      }),
    );
  }

  let mailerConfig;

  try {
    mailerConfig = getMailerConfig();
  } catch (error) {
    logger.error({ err: error }, "Invalid contact mailer configuration");
    return res.status(500).json(
      ContactResponseSchema.parse({
        ok: false,
        message: "Mail service is misconfigured.",
      }),
    );
  }

  if (!mailerConfig) {
    logger.error("Missing SMTP environment variables for contact form");
    return res.status(503).json(
      ContactResponseSchema.parse({
        ok: false,
        message: "Contact form is not configured yet.",
      }),
    );
  }

  const { name, email, message } = parsedBody.data;

  try {
    const transporter = nodemailer.createTransport({
      host: mailerConfig.host,
      port: mailerConfig.port,
      secure: mailerConfig.secure,
      auth: mailerConfig.auth,
    });

    await transporter.sendMail({
      from: mailerConfig.from,
      to: mailerConfig.to,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: [
        "New portfolio contact submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio contact submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json(
      ContactResponseSchema.parse({
        ok: true,
        message: "Message sent successfully.",
      }),
    );
  } catch (error) {
    logger.error({ err: error, email }, "Failed to send contact email");
    return res.status(502).json(
      ContactResponseSchema.parse({
        ok: false,
        message: "Unable to send your message right now. Please try again.",
      }),
    );
  }
});

export default router;
