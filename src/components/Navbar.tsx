import Link from "next/link";

const navLinks = [
  { href: "#gallery", label: "Work" },
  { href: "#book", label: "Inquiry" },
  { href: "#book", label: "Process" },
  { href: "#philosophy", label: "About" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.04] bg-[#060606]/55 backdrop-blur-md">
      <div className="mx-auto flex h-11 max-w-[1200px] items-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 font-display text-[15px] font-medium italic tracking-tight text-white/[0.82] transition-colors hover:text-white"
        >
          Ganj Tattoos
        </Link>

        <nav
          className="mx-auto hidden items-center gap-8 text-[10px] font-normal uppercase tracking-[0.32em] text-white/32 md:flex"
          aria-label="Main"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={`${href}-${label}`}
              href={href}
              className="transition-colors hover:text-white/55"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="#book"
          className="ml-auto rounded-sm border border-white/[0.08] bg-transparent px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/48 transition hover:border-white/14 hover:text-white/70"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
