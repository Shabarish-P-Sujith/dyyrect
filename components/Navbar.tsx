"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-brand-borderSubtle bg-brand-black/85 backdrop-blur-md transition-all"
      data-purpose="main-navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            aria-label="dyyrect Homepage"
            className="flex items-center space-x-2.5 group focus:outline-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-terminal-neon inline-block shadow-[0_0_8px_#00FF66] transition-transform group-hover:scale-110"></span>
            <span className="font-semibold text-lg tracking-tight text-white group-hover:text-zinc-200 transition-colors font-mono">
              dyyrect
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 text-sm text-brand-secondary font-medium">
            <a
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/[0.04] transition-colors"
              href="#product"
            >
              Product
            </a>
            <a
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/[0.04] transition-colors"
              href="#architecture"
            >
              Architecture
            </a>
            <a
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/[0.04] transition-colors"
              href="#cli"
            >
              CLI &amp; SDK
            </a>
            <a
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/[0.04] transition-colors"
              href="#benchmarks"
            >
              Benchmarks
            </a>
            <a
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/[0.04] transition-colors"
              href="#resources"
            >
              Security
            </a>
          </nav>
        </div>

        {/* Header Right CTAs */}
        <div className="flex items-center space-x-4">
          <Link
            className="text-sm font-medium text-brand-secondary hover:text-white transition-colors"
            href="/login"
          >
            Log in
          </Link>
          <Link
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-terminal-neon hover:bg-terminal-dim text-black font-semibold text-sm transition-all duration-150 shadow-neon-sm active:scale-[0.98]"
            href="/signup"
          >
            <span>Get Started</span>
            <svg
              className="w-3.5 h-3.5 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
