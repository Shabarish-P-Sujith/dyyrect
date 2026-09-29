import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-brand-border bg-brand-black pt-16 pb-12 text-zinc-400 text-xs"
      data-purpose="main-footer"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-brand-borderSubtle">
          {/* Col 1: Brand */}
          <div className="col-span-2 space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-terminal-neon shadow-[0_0_6px_#00FF66]"></span>
              <span className="font-semibold text-white tracking-tight text-base font-mono">
                dyyrect
              </span>
            </Link>
            <p className="text-zinc-400 max-w-xs leading-relaxed">
              Minimal peer-to-peer file streaming protocol. No cloud middleman, no egress cost.
            </p>
            <div className="pt-2 font-mono text-[11px] text-zinc-500">
              Licensed under Apache 2.0 • Zero Retention Engine
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white transition-colors" href="#product">
                  Transfer Protocol
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#cli">
                  CLI Tool
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#benchmarks">
                  Benchmarks
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#architecture">
                  Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white transition-colors" href="#cli">
                  Documentation
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#resources">
                  WebRTC Specs
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#resources">
                  Security Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white transition-colors" href="/login">
                  Peer Login
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/signup">
                  Register Node
                </Link>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#faq">
                  Network FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#cta">
                  Get Started
                </a>
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
          <div>© {new Date().getFullYear()} dyyrect. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
