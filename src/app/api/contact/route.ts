import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_MIME = new Set(["image/jpeg", "image/png", "image/webp"]);

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isAllowedImage(type: string, fileName: string): boolean {
  if (type && ALLOWED_MIME.has(type)) return true;
  return /\.(jpe?g|png|webp)$/i.test(fileName);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Add RESEND_API_KEY (and RESEND_FROM_EMAIL) to your environment.",
      },
      { status: 500 },
    );
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL ??
    "Ganj Tattoos <onboarding@resend.dev>";

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  if (!name || !email || !description) {
    return NextResponse.json(
      {
        error: "Please fill in your name, email, and project description.",
      },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const rawFiles = formData.getAll("references");
  const attachments: { filename: string; content: Buffer }[] = [];

  for (const item of rawFiles) {
    if (!(item instanceof Blob) || item.size === 0) continue;
    const file = item as File;
    const fileName =
      typeof file.name === "string" && file.name ? file.name : "reference.jpg";
    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        {
          error: `"${fileName}" is larger than 5MB. Please use a smaller file.`,
        },
        { status: 400 },
      );
    }
    if (!isAllowedImage(file.type, fileName)) {
      return NextResponse.json(
        {
          error: `"${fileName}" must be a JPG, PNG, or WebP image.`,
        },
        { status: 400 },
      );
    }
    const buf = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: fileName,
      content: buf,
    });
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2 style="font-family:Georgia,serif;">New inquiry — Ganj Tattoos</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Project description:</strong></p>
    <p style="white-space:pre-wrap;">${escapeHtml(description)}</p>
    <p><strong>Reference images:</strong> ${
      attachments.length
        ? `${attachments.length} attached`
        : "None attached"
    }</p>
  `;

  const result = await resend.emails.send({
    from: fromEmail,
    to: ["ganjtattoos@gmail.com"],
    replyTo: email,
    subject: `New inquiry from ${name}`,
    html,
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  if (result.error) {
    console.error("[contact]", result.error);
    return NextResponse.json(
      {
        error:
          result.error.message ||
          "Could not send your message. Try again later.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, id: result.data?.id });
}
