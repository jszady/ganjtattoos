"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

import { studioImages } from "@/lib/images";
import { fadeItem } from "@/lib/motion";

/**
 * Art-directed focal points per asset — cover + tuned centering within fixed frames.
 */
const WORK_FOCUS: Record<
  `work${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`,
  string
> = {
  work1: "object-[center_42%]",
  work2: "object-[center_40%]",
  work3: "object-[center_44%]",
  work4: "object-[center_45%]",
  work5: "object-[center_38%]",
  work6: "object-[center_42%]",
  work7: "object-[center_40%]",
  work8: "object-[center_42%]",
};

const imgClass =
  "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]";

type WorkSlot = keyof typeof WORK_FOCUS;

type TileProps = {
  slot: WorkSlot;
  src: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  delay?: number;
  sizes: string;
};

function GalleryTile({
  slot,
  src,
  alt,
  className,
  priority,
  delay = 0,
  sizes,
}: TileProps) {
  const focus = WORK_FOCUS[slot];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeItem}
      transition={{ delay }}
      className={className}
    >
      <div className="group relative h-full min-h-0 w-full overflow-hidden rounded-[9px] bg-[#080808] ring-1 ring-white/[0.06] transition-[box-shadow] duration-300 hover:ring-white/[0.11]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`${imgClass} ${focus}`}
          priority={priority}
        />
      </div>
    </motion.div>
  );
}

const GAP = "gap-4 lg:gap-5";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-[#0A0A0A] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeItem}
          className="mb-14 max-w-2xl lg:mb-20"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/45">
            The Archive
          </p>
          <h2 className="mt-3 font-display text-balance text-3xl font-semibold italic tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Selected works
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/48">
            Eight pieces in a fixed editorial layout — primary work, supporting
            pairs, then a closing row — composed like a gallery wall, not a feed.
          </p>
        </motion.div>

        <div className={`flex flex-col ${GAP}`}>
          {/* Row 1 — primary | stacked secondaries (8/4, single band height on lg) */}
          <div
            className={`flex flex-col ${GAP} lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-5 lg:h-[clamp(330px,38vw,490px)]`}
          >
            <GalleryTile
              slot="work1"
              src={studioImages.work1}
              alt="Featured tattoo work"
              priority
              delay={0}
              sizes="(max-width: 1023px) 100vw, 66vw"
              className="h-[clamp(290px,65vw,430px)] min-h-0 shrink-0 lg:col-span-8 lg:h-full"
            />
            <div
              className={`flex min-h-0 flex-1 flex-col ${GAP} lg:col-span-4 lg:h-full lg:min-h-0`}
            >
              <GalleryTile
                slot="work2"
                src={studioImages.work2}
                alt="Selected tattoo work"
                delay={0.05}
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="h-[clamp(210px,45vw,290px)] min-h-0 lg:min-h-0 lg:flex-1"
              />
              <GalleryTile
                slot="work3"
                src={studioImages.work3}
                alt="Selected tattoo work"
                delay={0.1}
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="h-[clamp(210px,45vw,290px)] min-h-0 lg:min-h-0 lg:flex-1"
              />
            </div>
          </div>

          {/* Row 2 — two equal mediums */}
          <div
            className={`grid grid-cols-1 items-stretch ${GAP} lg:grid-cols-2 lg:gap-5 lg:h-[clamp(270px,30vw,370px)]`}
          >
            <GalleryTile
              slot="work4"
              src={studioImages.work4}
              alt="Selected tattoo work"
              delay={0.12}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="h-[clamp(230px,52vw,330px)] min-h-0 lg:h-full"
            />
            <GalleryTile
              slot="work5"
              src={studioImages.work5}
              alt="Selected tattoo work"
              delay={0.14}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="h-[clamp(230px,52vw,330px)] min-h-0 lg:h-full"
            />
          </div>

          {/* Row 3 — three equal */}
          <div
            className={`grid grid-cols-1 items-stretch ${GAP} sm:grid-cols-3 lg:h-[clamp(230px,26vw,310px)]`}
          >
            <GalleryTile
              slot="work6"
              src={studioImages.work6}
              alt="Selected tattoo work"
              delay={0.16}
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="h-[clamp(210px,42vw,290px)] min-h-0 lg:h-full"
            />
            <GalleryTile
              slot="work7"
              src={studioImages.work7}
              alt="Selected tattoo work"
              delay={0.18}
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="h-[clamp(210px,42vw,290px)] min-h-0 lg:h-full"
            />
            <GalleryTile
              slot="work8"
              src={studioImages.work8}
              alt="Selected tattoo work"
              delay={0.2}
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="h-[clamp(210px,42vw,290px)] min-h-0 lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
