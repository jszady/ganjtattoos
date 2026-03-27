import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/[0.06] bg-[#060606] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Ganj Tattoos</p>
            <p className="mt-2 max-w-sm text-sm text-white/50">
              Brooklyn-based studio — book a consultation and bring your next
              piece to life.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <span className="text-white/40">Studio</span>
            <span>Hand of Glory Tattoo · Park Slope, Brooklyn</span>
            <Link
              href="mailto:hello@ganjtattoos.com"
              className="w-fit text-accent transition-opacity hover:opacity-80"
            >
              hello@ganjtattoos.com
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-white/[0.06] pt-8 text-center text-xs text-white/35">
          © {new Date().getFullYear()} Ganj Tattoos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
