"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { studioImages } from "@/lib/images";
import { fadeUp } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-hidden bg-[#060606] pb-20 pt-14 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(46,204,113,0.05),transparent_35%)] opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-white/40">
              SOLO RESIDENT ARTIST
            </p>

            <h1 className="mt-4 font-display text-white">
              <span className="block text-balance text-6xl font-semibold italic leading-[0.96] tracking-[-0.02em] sm:text-7xl lg:text-[4.85rem] lg:leading-[0.98]">
                <span className="text-[#C6A96B]">Custom</span>{" "}
                <span className="text-[#C6A96B]">Ink.</span>
              </span>
              <span className="mt-1 block text-balance text-6xl font-semibold italic leading-[0.96] tracking-[-0.02em] sm:text-7xl lg:text-[4.85rem] lg:leading-[0.98]">
                Personal
              </span>
              <span className="mt-1 block text-balance text-6xl font-semibold italic leading-[0.96] tracking-[-0.02em] sm:text-7xl lg:text-[4.85rem] lg:leading-[0.98]">
                Artistry.
              </span>
            </h1>

            <p className="mt-5 max-w-[300px] text-[0.9375rem] leading-[1.65] text-white/48">
              Working out of{" "}
              <span className="italic text-white/62">Hand of Glory</span>, Brooklyn.
              Intentional body ornament through fine line, blackwork, and custom
              illustration.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="#book"
                className="inline-flex items-center justify-center border border-white/[0.11] bg-white/[0.04] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 ease-in-out hover:border-[#C6A96B] hover:bg-[rgba(198,169,107,0.08)] hover:text-[#C6A96B] hover:tracking-[0.29em]"
              >
                Book Appointment
              </Link>
              <Link
                href="#gallery"
                className="inline-flex items-center justify-center border border-white/[0.07] bg-transparent px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/48 transition-all duration-300 ease-in-out hover:border-[#C6A96B] hover:bg-[rgba(198,169,107,0.05)] hover:text-[#C6A96B] hover:tracking-[0.29em]"
              >
                View Work
              </Link>
            </div>

            <div className="mt-10 max-w-[430px] border-t border-white/[0.08] pt-5">
              <div className="flex items-start gap-8">
                <div className="pr-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
                    PRIMARY STYLES
                  </p>
                  <p className="mt-3 text-sm italic text-white/55">
                    Blackwork, Fine Line, Realism
                  </p>
                </div>
                <div className="h-12 w-px bg-white/10" aria-hidden />
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
                    AVAILABILITY
                  </p>
                  <p className="mt-3 text-sm italic text-white/55">
                    Booking October — Dec
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="lg:col-span-7 lg:pl-6"
          >
            <div className="relative ml-auto w-full max-w-[680px]">
              <div className="relative overflow-hidden rounded-[14px] bg-[#050505] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_24px_80px_-24px_rgba(0,0,0,0.85)]">
                {/* Editorial blend: darken edges + bottom into page; keep face readable */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#060606] via-transparent to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_90%_80%_at_50%_45%,transparent_35%,rgba(6,6,6,0.45)_100%)]"
                  aria-hidden
                />
                <div className="relative aspect-[4/5] w-full lg:aspect-[5/4]">
                  <Image
                    src={studioImages.profile}
                    alt="Ganj Tattoos — artist profile"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="scale-[1.06] object-cover object-[50%_34%] contrast-[1.02] brightness-[0.92]"
                  />
                </div>
              </div>

              {/* Badge: anchored to lower-left of frame, half overlap — intentional, not floating */}
              <div className="absolute bottom-0 left-8 z-20 translate-y-1/2 sm:left-10">
                <div className="flex h-[72px] w-[88px] items-center justify-center rounded-[6px] bg-black/85 px-3 ring-1 ring-white/[0.09] backdrop-blur-sm">
                  <Image
                    src={studioImages.ganjLogo}
                    alt="Ganj"
                    width={72}
                    height={22}
                    className="h-auto w-full max-w-[72px] opacity-[0.92]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
