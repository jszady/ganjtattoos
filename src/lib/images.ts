import type { StaticImageData } from "next/image";

import profile from "@/assets/images/PF.jpeg";

import work1 from "@/assets/images/work1.jpeg";
import work2 from "@/assets/images/work2.jpeg";
import work3 from "@/assets/images/work3.jpeg";
import work4 from "@/assets/images/work4.jpeg";
import work5 from "@/assets/images/work5.jpeg";
// The project image file is named `2ork6.jpeg` (likely intended to be work6).
import work6 from "@/assets/images/2ork6.jpeg";
import work7 from "@/assets/images/work7.jpeg";
import work8 from "@/assets/images/work8.jpeg";
import work9 from "@/assets/images/work9.jpeg";
import ganjLogo from "@/assets/images/GanjLogo.jpeg";
import philosophyPractice from "@/assets/images/P&P.jpeg";

/**
 * Solo-artist image map.
 *
 * Swap placeholders by replacing files in `src/assets/images`
 * and updating these imports/aliases only when names change.
 */
export const studioImages = {
  profile,
  ganjLogo,
  philosophyPractice,
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  work9,
} satisfies Record<string, StaticImageData>;

export type StudioImageKey = keyof typeof studioImages;
