"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { studioImages } from "@/lib/images";
import { fadeItem } from "@/lib/motion";

type ArtistCardProps = {
  name: string;
  role: string;
  bio: string;
  delay?: number;
};

export function ArtistCard({ name, role, bio, delay = 0 }: ArtistCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeItem}
      transition={{ delay }}
      className="overflow-hidden rounded-2xl bg-[#111111] ring-1 ring-white/[0.06]"
    >
      <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
        <Image
          src={studioImages.profile}
          alt={`${name} — artist portrait placeholder`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"
          aria-hidden
        />
      </div>
      <div className="space-y-2 p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          {role}
        </p>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm leading-relaxed text-white/55">{bio}</p>
      </div>
    </motion.article>
  );
}
