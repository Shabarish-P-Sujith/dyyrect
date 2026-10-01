import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-brand-border bg-brand-black pt-16 pb-12 text-zinc-400 text-xs"
      data-purpose="main-footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-brand-borderSubtle">
          {/* Col 1: Brand & Status (Span 2 on lg) */}
          <div className="lg:col-span-2 space-y-3.5 pr-4">
            <Link href="/" className="flex items-center space-x-2 w-fit group">
              <span className="w-2 h-2 rounded-full bg-terminal-neon shadow-[0_0_6px_#00FF66] group-hover:scale-110 transition-transform"></span>
              <span className="font-semibold text-white tracking-tight text-base font-mono">
                dyyrect
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                v2.4
              </span>
            </Link>
            <p className="text-zinc-400 max-w-sm leading-relaxed text-xs">
              Minimal peer-to-peer file streaming protocol. No cloud middleman, no egress cost. Real-time direct browser-to-browser data exchange.
            </p>
            <div className="pt-2 font-mono text-[11px] text-zinc-500 flex flex-col gap-1">
              <div>Licensed under Apache 2.0 • Zero Retention Engine</div>
              <div className="flex items-center gap-1.5 text-emerald-400/90 text-[11px] pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-neon animate-pulse"></span>
                <span>Direct P2P Signaling Mesh Active</span>
              </div>
            </div>
          </div>

          {/* Col 2: Pages */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white font-mono uppercase tracking-wider text-[11px]">
              Pages
            </h4>
            <ul className="space-y-2 font-sans">
              <li>
                <Link className="hover:text-white hover:text-terminal-neon transition-colors flex items-center gap-1.5" href="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/login">
                  Sign In / Login
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/signup">
                  Register / Sign Up
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/customer">
                  Customer Portal
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/admin">
                  Admin Console
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/terms">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white font-mono uppercase tracking-wider text-[11px]">
              Product
            </h4>
            <ul className="space-y-2 font-sans">
              <li>
                <a className="hover:text-white transition-colors" href="/#dropzone">
                  Transfer Protocol
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/#cli">
                  CLI &amp; SDK Tool
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/#benchmarks">
                  Benchmarks
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/#architecture">
                  Architecture
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/#resources">
                  WebRTC Specs
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="/#faq">
                  Network FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Terms and Conditions / Legal */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white font-mono uppercase tracking-wider text-[11px]">
              Terms &amp; Legal
            </h4>
            <ul className="space-y-2 font-sans">
              <li>
                <Link className="hover:text-white hover:text-terminal-neon transition-colors" href="/terms">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/terms#privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/terms#zero-retention">
                  Zero-Retention Standard
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/terms#acceptable-use">
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/terms#license">
                  Apache 2.0 License
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Section */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white font-mono uppercase tracking-wider text-[11px]">
              Contact Us
            </h4>
            <ul className="space-y-2.5 font-sans">
              <li>
                <div className="text-[11px] text-zinc-500 font-mono">Email Support</div>
                <a
                  className="hover:text-white text-zinc-300 transition-colors flex items-center gap-1.5 mt-0.5 group"
                  href="mailto:support@dyyrect.com"
                >
                  <svg
                    className="w-3.5 h-3.5 text-terminal-neon shrink-0 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>support@dyyrect.com</span>
                </a>
              </li>
              <li>
                <div className="text-[11px] text-zinc-500 font-mono">General Inquiries</div>
                <a
                  className="hover:text-white text-zinc-300 transition-colors flex items-center gap-1.5 mt-0.5 group"
                  href="mailto:contact@dyyrect.com"
                >
                  <svg
                    className="w-3.5 h-3.5 text-terminal-neon shrink-0 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <span>contact@dyyrect.com</span>
                </a>
              </li>
              <li>
                <div className="text-[11px] text-zinc-500 font-mono">Contact Number</div>
                <a
                  className="hover:text-white text-zinc-300 transition-colors flex items-center gap-1.5 mt-0.5 group"
                  href="tel:+18003997328"
                >
                  <svg
                    className="w-3.5 h-3.5 text-terminal-neon shrink-0 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+1 (800) 399-7328</span>
                </a>
              </li>
              <li className="pt-1">
                <span className="text-[10px] font-mono text-zinc-500 block">
                  24/7 Global NOC Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal-neon animate-pulse"></span>
            <span>Systems normal — Global STUN / TURN mesh operational</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <span>© {new Date().getFullYear()} dyyrect. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
