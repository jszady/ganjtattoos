"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { studioImages } from "@/lib/images";
import { fadeItem } from "@/lib/motion";

function CaptionIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 2.5L4.5 5.25v6.5c0 4.8 3.2 8.9 7.5 10.25 4.3-1.35 7.5-5.45 7.5-10.25v-6.5L12 2.5z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
        className="text-white/32"
      />
    </svg>
  );
}

export function PhilosophyPractice() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-24 border-t border-white/[0.04] bg-[#050505] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-16 xl:gap-20">
          {/* Left: image + caption — defines row height */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeItem}
            className="flex flex-col lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-[10px] bg-[#050505] ring-1 ring-white/[0.06]">
              <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
                <Image
                  src={studioImages.philosophyPractice}
                  alt="Philosophy and practice — tattoo process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <CaptionIcon className="mt-0.5 shrink-0" />
              <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.28em] text-white/42">
                The process is as sacred as the result.
              </p>
            </div>
          </motion.div>

          {/*
            Right column: two flex zones (not three) — full copy flows as one column,
            signature pinned to bottom. Avoids justify-between splitting the title from the body.
          */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeItem}
            transition={{ delay: 0.06 }}
            className="flex min-h-0 flex-col lg:col-span-6 lg:-mt-3 lg:h-full lg:justify-between lg:pt-0"
          >
            <div className="text-[15px] leading-[1.75] text-white/52 sm:text-base lg:max-w-xl lg:pr-1">
              {/* Title + first paragraph = one typographic unit */}
              <h2 className="mb-0 font-display text-balance text-[2.25rem] font-semibold italic leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.75rem]">
                Philosophy &amp; Practice
              </h2>
              <p className="mt-7">
                I view tattooing not as a service, but as a collaborative ritual
                between artist and canvas. My work is shaped by precision,
                composition, and the belief that good tattooing should feel
                intentional from first sketch to final line.
              </p>

              <p className="mt-6">
                In my practice, I focus on creating work that sits naturally on
                the body designs that feel balanced, timeless, and considered.
                Every appointment is approached with care, patience, and respect
                for the person wearing it.
              </p>

              <div className="mt-9 border-t border-white/[0.06] pt-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-white/44">
                  Approach
                </p>
                <div className="mt-4 space-y-3.5 text-[14px] leading-[1.72] text-white/48 sm:text-[15px] sm:leading-[1.75]">
                  <p>
                    Each design begins with a conversation understanding
                    placement, flow, and how the piece will live on the body. I
                    focus on creating work that feels natural in motion, not
                    just on paper.
                  </p>
                  <p>
                    From concept to execution, every detail is considered.
                    Nothing is rushed, nothing is repeated.
                  </p>
                </div>
              </div>

              <p className="mt-8 text-[15px] font-medium leading-relaxed text-white/68 sm:text-base">
                Every piece is custom. Every session is personal.
              </p>
            </div>

            <div className="mt-10 flex shrink-0 items-center gap-4 lg:mt-0">
              <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full ring-1 ring-white/[0.1]">
                <Image
                  src={studioImages.profile}
                  alt="Ganj — portrait"
                  fill
                  sizes="52px"
                  className="object-cover object-center"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg font-medium italic tracking-tight text-white/[0.92]">
                  Ganj
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.32em] text-white/38">
                  Artist
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
