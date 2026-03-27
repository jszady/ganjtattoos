"use client";

import { motion } from "framer-motion";
import { useCallback, useId, useRef, useState } from "react";

import { fadeItem } from "@/lib/motion";

const steps = [
  {
    title: "The Narrative",
    body: "Describe the concept, the size in inches, and the placement on your body. Attach reference photos of my own work that resonates with you.",
  },
  {
    title: "The Schedule",
    body: "State your general availability. I work Tuesday through Saturday. Booking is typically 2 months out.",
  },
  {
    title: "The Deposit",
    body: "A non-refundable $150 deposit is required to secure your date. This goes toward the final cost of your tattoo.",
  },
] as const;

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ACCEPT = "image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp";

const inputUnderline =
  "w-full border-0 border-b border-white/[0.14] bg-transparent py-2.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-[border-color,box-shadow] focus:border-white/[0.38] focus:ring-0";

export function HowToBook() {
  const formId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const validateFiles = useCallback((list: File[]) => {
    for (const f of list) {
      if (f.size > MAX_FILE_BYTES) {
        return `"${f.name}" must be 5MB or smaller.`;
      }
      const ok =
        /image\/(jpeg|png|webp)/.test(f.type) ||
        /\.(jpe?g|png|webp)$/i.test(f.name);
      if (!ok) {
        return `"${f.name}" must be JPG, PNG, or WebP.`;
      }
    }
    return null;
  }, []);

  const touchForm = useCallback(() => {
    if (status === "success" || status === "error") {
      setStatus("idle");
      setMessage("");
    }
  }, [status]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    touchForm();
    const list = e.target.files;
    if (!list?.length) return;
    const next = Array.from(list);
    const err = validateFiles(next);
    if (err) {
      setMessage(err);
      setStatus("error");
      e.target.value = "";
      return;
    }
    setFiles((prev) => [...prev, ...next]);
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    touchForm();
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    if (!name.trim() || !email.trim() || !description.trim()) {
      setStatus("error");
      setMessage("Please complete all required fields.");
      return;
    }

    setStatus("loading");

    const fd = new FormData();
    fd.append("name", name.trim());
    fd.append("email", email.trim());
    fd.append("description", description.trim());
    files.forEach((f) => fd.append("references", f));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thank you — your inquiry was sent. I’ll be in touch soon.");
      setName("");
      setEmail("");
      setDescription("");
      setFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setStatus("error");
      setMessage("Network error. Check your connection and try again.");
    }
  };

  return (
    <section id="book" className="scroll-mt-24 bg-[#0A0A0A] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeItem}
          className="text-center"
        >
          <h2 className="font-display text-balance text-[2.25rem] font-semibold italic leading-tight tracking-tight text-white sm:text-[2.5rem] lg:text-[2.75rem]">
            How to Book
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[10px] font-medium uppercase leading-relaxed tracking-[0.28em] text-white/42">
            Intentional pieces require intentional communication.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeItem}
          transition={{ delay: 0.05 }}
          className="mt-14 sm:mt-16"
        >
          <ol className="space-y-10 text-left">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5 sm:gap-7">
                <span
                  className="w-6 shrink-0 pt-0.5 text-right text-sm font-medium tabular-nums text-white/55 sm:w-8"
                  aria-hidden
                >
                  {i + 1}.
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-medium tracking-tight text-white sm:text-[17px]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[1.75] text-white/50">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeItem}
          transition={{ delay: 0.1 }}
          className="mt-14 sm:mt-16"
        >
          <div className="rounded-[11px] border border-white/[0.08] bg-[#060606] p-6 sm:p-8 lg:p-9">
            <h3 className="text-center font-display text-xl font-semibold italic tracking-tight text-white sm:text-2xl">
              Ready to initiate?
            </h3>

            <form
              id={formId}
              className="mt-10 space-y-8"
              onSubmit={onSubmit}
              noValidate
            >
              <div>
                <label
                  htmlFor={`${formId}-name`}
                  className="block text-[10px] font-medium uppercase tracking-[0.26em] text-white/40"
                >
                  Full Name <span className="text-white/25">(required)</span>
                </label>
                <input
                  id={`${formId}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => {
                    touchForm();
                    setName(e.target.value);
                  }}
                  className={`${inputUnderline} mt-2`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor={`${formId}-email`}
                  className="block text-[10px] font-medium uppercase tracking-[0.26em] text-white/40"
                >
                  Email Address{" "}
                  <span className="text-white/25">(required)</span>
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    touchForm();
                    setEmail(e.target.value);
                  }}
                  className={`${inputUnderline} mt-2`}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor={`${formId}-description`}
                  className="block text-[10px] font-medium uppercase tracking-[0.26em] text-white/40"
                >
                  Project Description{" "}
                  <span className="text-white/25">(required)</span>
                </label>
                <textarea
                  id={`${formId}-description`}
                  name="description"
                  required
                  rows={5}
                  value={description}
                  onChange={(e) => {
                    touchForm();
                    setDescription(e.target.value);
                  }}
                  className={`${inputUnderline} mt-2 min-h-[120px] resize-y`}
                  placeholder="Concept, placement, size, references…"
                />
              </div>

              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.26em] text-white/40">
                  Reference images{" "}
                  <span className="text-white/25">(optional)</span>
                </label>
                <p className="mt-1 text-xs text-white/32">
                  JPG, PNG, or WebP — up to 5MB each. Multiple files allowed.
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={ACCEPT}
                    multiple
                    className="text-[13px] text-white/55 file:mr-4 file:rounded-sm file:border-0 file:bg-white/[0.06] file:px-3 file:py-1.5 file:text-[11px] file:font-medium file:uppercase file:tracking-[0.2em] file:text-white/70 hover:file:bg-white/[0.1]"
                    onChange={onFileChange}
                  />
                  {files.length > 0 && (
                    <ul className="space-y-2 text-sm text-white/45">
                      {files.map((f, i) => (
                        <li
                          key={`${f.name}-${f.size}-${i}`}
                          className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-2"
                        >
                          <span className="min-w-0 truncate">{f.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-white/35 transition hover:text-white/55"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {message && (
                <p
                  className={
                    status === "success"
                      ? "text-sm leading-relaxed text-white/60"
                      : "text-sm leading-relaxed text-red-400/90"
                  }
                  role={status === "error" ? "alert" : "status"}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full border border-white/[0.12] bg-white/[0.04] py-3.5 text-[11px] font-medium uppercase tracking-[0.32em] text-white/85 transition hover:border-white/[0.2] hover:bg-white/[0.07] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? "Sending…" : "Submit inquiry"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
