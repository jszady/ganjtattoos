import { Navbar } from "@/components/Navbar";
import { CTA } from "@/components/CTA";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HowToBook } from "@/components/HowToBook";
import { PhilosophyPractice } from "@/components/PhilosophyPractice";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <PhilosophyPractice />
      <HowToBook />
      <Testimonials />
      <CTA />
    </>
  );
}
