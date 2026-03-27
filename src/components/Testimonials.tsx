"use client";

import { motion } from "framer-motion";

import { fadeItem } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "The consultation felt thoughtful and personal. The design fit my body perfectly and the linework is still crisp.",
    name: "Client",
    meta: "Fine line, custom design",
  },
  {
    quote:
      "It’s rare to feel this confident about placement and composition—everything from sketch to session felt calm and precise.",
    name: "Client",
    meta: "American traditional spirit",
  },
  {
    quote:
      "Clean studio experience, great aftercare guidance, and a piece that looks even better months later.",
    name: "Client",
    meta: "Consult-first process",
  },
] as const;

export function Testimonials() {
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeItem}
          className="mb-10 max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
            Testimonials
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Quiet words from real clients.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeItem}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl border border-white/[0.08] bg-[#070707] p-6 sm:p-7"
            >
              <div className="text-2xl font-serif text-white/70 leading-none">
                “
              </div>
              <p className="mt-4 text-balance text-sm leading-relaxed text-white/65 sm:text-base">
                {t.quote}
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="mt-1 text-xs text-white/45">{t.meta}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

