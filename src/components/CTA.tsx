"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { fadeUp } from "@/lib/motion";

export function CTA() {
  return (
    <section id="contact" className="bg-[#0A0A0A] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#101010] to-[#070707] px-8 py-16 text-center sm:px-12 sm:py-20"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />

          <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
            Booking
          </p>

          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to Book Your Next Piece?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-balance text-white/55">
            Share your idea and I’ll guide you through design and placement
            with a calm, consult-first process.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#book"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] transition hover:opacity-90"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
