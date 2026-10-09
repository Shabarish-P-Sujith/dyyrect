import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TerminalDemo from "@/components/TerminalDemo";
import FaqAccordion from "@/components/FaqAccordion";
import TransferDropzone from "@/components/TransferDropzone";

export default function HomePage() {
  return (
    <div className="bg-brand-black text-brand-light font-sans antialiased min-h-screen relative flex flex-col justify-between">
      {/* Subtle Atmospheric Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-white/[0.04] via-zinc-600/[0.015] to-transparent blur-3xl opacity-70"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex-1">
        {/* BEGIN: Hero Section */}
        <section
          className="relative pt-20 pb-12 lg:pt-28 lg:pb-16 bg-grid-subtle"
          data-purpose="hero-section"
        >
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            {/* Minimalist pill badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-dark border border-brand-border text-xs text-brand-secondary mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.6)]"></span>
              <span>Direct browser-to-browser streaming</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Transfer directly.
              <br />
              <span className="text-zinc-400">No cloud. No limits.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-brand-secondary max-w-2xl mx-auto leading-relaxed">
              Stream files peer-to-peer straight between browsers, servers, and automated
              pipelines. Your data never touches a staging server or persistent storage.
            </p>

            {/* Clean Dual CTA */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <a
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-all duration-150 flex items-center space-x-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-[0.98]"
                href="#dropzone"
              >
                <span>Start Direct Transfer</span>
                <svg
                  className="w-4 h-4 stroke-[2.5]"
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
              </a>
              <a
                className="px-5 py-2.5 rounded-lg bg-brand-card hover:bg-zinc-800 text-zinc-300 font-mono text-xs border border-brand-border transition-colors flex items-center space-x-2"
                href="#cli"
              >
                <span className="text-zinc-500">$</span>
                <span>npx dyyrect --send</span>
              </a>
            </div>

            {/* Quiet Baseline Attributes */}
            <div className="mt-14 pt-8 border-t border-brand-borderSubtle flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-zinc-500">
              <div className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>End-to-End Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Memory-to-Memory WebRTC</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                <span>Zero Storage Footprint</span>
              </div>
            </div>
          </div>
        </section>
        {/* END: Hero Section */}

        {/* Interactive Direct Dropzone Simulator */}
        <TransferDropzone />

        {/* BEGIN: Social Proof / Trusted By Builders */}
        <section
          className="py-12 border-y border-brand-borderSubtle bg-brand-black/60"
          data-purpose="social-proof"
          id="customers"
        >
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center font-mono text-[11px] uppercase tracking-widest text-zinc-500 mb-8">
              Powering zero-retention data pipelines for engineering teams &amp; AI labs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center opacity-70">
              <div className="flex items-center justify-center space-x-2 text-zinc-400 font-mono text-xs hover:text-zinc-200 transition-colors">
                <span className="font-bold text-zinc-300 tracking-tight text-sm">SCALEPOINT</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zinc-400 font-mono text-xs hover:text-zinc-200 transition-colors">
                <span className="font-bold text-zinc-300 tracking-tight text-sm">VECTOR//AI</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zinc-400 font-mono text-xs hover:text-zinc-200 transition-colors">
                <span className="font-bold text-zinc-300 tracking-tight text-sm">TENSORSTREAM</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zinc-400 font-mono text-xs hover:text-zinc-200 transition-colors">
                <span className="font-bold text-zinc-300 tracking-tight text-sm">HYPEREDGE</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zinc-400 font-mono text-xs hover:text-zinc-200 transition-colors">
                <span className="font-bold text-zinc-300 tracking-tight text-sm">CHRONOS_DATA</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zinc-400 font-mono text-xs hover:text-zinc-200 transition-colors">
                <span className="font-bold text-zinc-300 tracking-tight text-sm">NEURALMESH</span>
              </div>
            </div>
          </div>
        </section>
        {/* END: Social Proof */}

        {/* BEGIN: Under the Hood / 3-Step Architectural Flow */}
        <section
          className="py-20 lg:py-24 bg-brand-black border-b border-brand-borderSubtle"
          data-purpose="how-it-works"
          id="architecture"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 mb-3">
                <span>Protocol Specs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Under the hood: zero-staging architecture.
              </h2>
              <p className="mt-3 text-sm text-brand-secondary">
                How dyyrect bypasses the cloud entirely to establish private high-throughput channels.
              </p>
            </div>

            {/* 3-Step Flow Diagram Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Step 01 */}
              <div className="p-6 rounded-xl bg-brand-dark/70 border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-white bg-white/10 border border-white/15 px-2 py-0.5 rounded">
                      STEP 01
                    </span>
                    <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-white">Signaling &amp; Hole-Punch</h3>
                  <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                    Stateless WebRTC handshake over STUN/TURN relays ephemeral SDP offers. Endpoints
                    punch through symmetric NATs to lock a direct socket.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border font-mono text-[11px] text-zinc-500">
                  ICE candidate negotiation &lt; 85ms
                </div>
              </div>

              {/* Step 02 */}
              <div className="p-6 rounded-xl bg-brand-dark/70 border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-white bg-white/10 border border-white/15 px-2 py-0.5 rounded">
                      STEP 02
                    </span>
                    <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-white">Cryptographic Tunneling</h3>
                  <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                    Noise Protocol framework executes an in-memory Curve25519 diffie-hellman exchange.
                    AES-GCM-256 cipher keys never touch disk.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border font-mono text-[11px] text-zinc-500">
                  Ephemeral X25519 Perfect Secrecy
                </div>
              </div>

              {/* Step 03 */}
              <div className="p-6 rounded-xl bg-brand-dark/70 border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-white bg-white/10 border border-white/15 px-2 py-0.5 rounded">
                      STEP 03
                    </span>
                    <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-white">Direct Memory Pipelining</h3>
                  <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                    Payload is chunked into 64KB backpressure-aware frames streamed directly into recipient
                    disk write streams with zero intermediate cache.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border font-mono text-[11px] text-zinc-500">
                  Zero bufferbloat &amp; max NIC throughput
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Under the Hood */}

        {/* BEGIN: Minimal 3-Column Features Section */}
        <section
          className="py-20 lg:py-24 bg-brand-black border-b border-brand-borderSubtle"
          data-purpose="minimal-features"
          id="product"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Built for simple, high-throughput delivery.
              </h2>
              <p className="mt-3 text-sm text-brand-secondary">
                Direct connections with zero storage overhead, ideal for engineering teams and heavy assets.
              </p>
            </div>

            {/* Minimal 3-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="rounded-xl bg-brand-dark/50 border border-brand-border p-6 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-300 mb-5 border border-zinc-700/50">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-white">Direct P2P Speed</h3>
                  <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                    Eliminates intermediate cloud staging. Files stream directly between endpoints over WebRTC
                    data channels at line rate.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-borderSubtle text-[11px] font-mono text-zinc-500">
                  Zero upload bottlenecks
                </div>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl bg-brand-dark/50 border border-brand-border p-6 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-300 mb-5 border border-zinc-700/50">
                    <svg className="w-4 h-4 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-white">Zero Cloud Retention</h3>
                  <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                    Payloads never persist on third-party servers. Ephemeral sessions self-destruct once transfer
                    completes.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-borderSubtle text-[11px] font-mono text-zinc-500">
                  Ephemeral E2EE keys
                </div>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl bg-brand-dark/50 border border-brand-border p-6 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-300 mb-5 border border-zinc-700/50">
                    <svg className="w-4 h-4 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-white">CLI &amp; CI/CD Pipelines</h3>
                  <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                    Trigger build artifact distributions from GitHub Actions, terminal shells, or automated edge
                    environments effortlessly.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-borderSubtle text-[11px] font-mono text-zinc-500">
                  Native headless support
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Features Section */}

        {/* BEGIN: Bento Grid Capabilities */}
        <section
          className="py-20 lg:py-24 bg-brand-black border-b border-brand-borderSubtle"
          data-purpose="bento-capabilities"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-14">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                Engineering Specs
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
                Engineered for precision throughput.
              </h2>
              <p className="mt-2 text-sm text-brand-secondary">
                Granular control systems preventing memory leaks, network drops, and compliance friction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Bento 1 */}
              <div className="p-6 rounded-xl bg-brand-dark/60 border border-brand-border">
                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]"></span>
                  <span>Memory Safety</span>
                </div>
                <h3 className="text-base font-semibold text-white">Terabyte Chunking Without Browser Crashes</h3>
                <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                  SCTP window regulation streams file slices directly through FileSystem API and WritableStream
                  buffers, avoiding RAM inflation even on 100GB+ files.
                </p>
              </div>

              {/* Bento 2 */}
              <div className="p-6 rounded-xl bg-brand-dark/60 border border-brand-border">
                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                  <span>Ephemeral Handshakes</span>
                </div>
                <h3 className="text-base font-semibold text-white">Configurable TTL &amp; Self-Destruct Links</h3>
                <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                  Set strictly bounded transfer windows from 60 seconds to 24 hours. Rooms dissolve automatically
                  once recipient checksum is confirmed.
                </p>
              </div>

              {/* Bento 3 */}
              <div className="p-6 rounded-xl bg-brand-dark/60 border border-brand-border">
                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                  <span>NAT Traversal</span>
                </div>
                <h3 className="text-base font-semibold text-white">P2P Hole Punch with Encrypted Relay</h3>
                <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                  Over 94% direct connection rate across strict enterprise firewalls. Symmetric NAT fallbacks
                  route through zero-knowledge stateless relays.
                </p>
              </div>

              {/* Bento 4 */}
              <div className="p-6 rounded-xl bg-brand-dark/60 border border-brand-border">
                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                  <span>Compliance Guard</span>
                </div>
                <h3 className="text-base font-semibold text-white">Zero Storage Footprint &amp; SOC2 Friendly</h3>
                <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                  Because no data rests on third-party servers, your compliance scope remains untouched. Zero data
                  at rest simplifies audit readiness.
                </p>
              </div>

              {/* Bento 5 */}
              <div className="p-6 rounded-xl bg-brand-dark/60 border border-brand-border">
                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                  <span>Congestion Engine</span>
                </div>
                <h3 className="text-base font-semibold text-white">Granular Backpressure &amp; Flow Control</h3>
                <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                  Receiver throttles adjust dynamically to disk I/O write latencies, avoiding buffer exhaustion on
                  asymmetric fiber or mixed broadband links.
                </p>
              </div>

              {/* Bento 6 */}
              <div className="p-6 rounded-xl bg-brand-dark/60 border border-brand-border">
                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]"></span>
                  <span>Pipeline Native</span>
                </div>
                <h3 className="text-base font-semibold text-white">Automated GitHub Actions &amp; CLI SDK</h3>
                <p className="mt-2 text-xs text-brand-secondary leading-relaxed">
                  Distribute compiled tarballs or machine learning checkpoints directly to test clusters without
                  paying multi-gigabyte S3 egress charges.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* END: Bento Grid */}

        {/* BEGIN: Developer Terminal / CLI Showcase */}
        <section
          className="py-20 lg:py-24 bg-brand-black border-b border-brand-borderSubtle"
          data-purpose="cli-showcase"
          id="cli"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                  <span>Terminal SDK</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Built for terminal lovers &amp; automation.
                </h2>
                <p className="text-sm text-brand-secondary leading-relaxed">
                  Never leave your terminal. Stream directory tarballs, raw disk images, or model weights
                  right from bash, zsh, or automated pipeline scripts.
                </p>
                <div className="pt-2 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]"></span>
                    <span>Single binary install or NPX runtime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]"></span>
                    <span>Automatic stdout / stdin pipe redirection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]"></span>
                    <span>Headless token issuance</span>
                  </div>
                </div>
              </div>

              {/* Interactive Tabbed Code Box */}
              <div className="lg:col-span-7">
                <TerminalDemo />
              </div>
            </div>
          </div>
        </section>
        {/* END: Developer Terminal */}

        {/* BEGIN: Engineered for High-Stakes Use Cases */}
        <section
          className="py-20 lg:py-24 bg-brand-black border-b border-brand-borderSubtle"
          data-purpose="use-cases"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                Workloads
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
                Engineered for high-stakes payloads.
              </h2>
              <p className="mt-2 text-sm text-brand-secondary">
                When cloud egress costs surge or sensitive assets must never hit cloud disks.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-lg bg-brand-dark/40 border border-brand-border hover:border-zinc-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center text-white mb-3 border border-zinc-700/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white">LLM Checkpoints</h3>
                <p className="mt-1.5 text-xs text-brand-secondary leading-relaxed">
                  Distribute 40GB+ Safetensors and PyTorch weights between GPU nodes in seconds.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-brand-dark/40 border border-brand-border hover:border-zinc-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-400 mb-3 border border-zinc-700/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white">8K ProRes Dailies</h3>
                <p className="mt-1.5 text-xs text-brand-secondary leading-relaxed">
                  Send uncompressed video rushes from on-set field units to editorial suites with zero compression.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-brand-dark/40 border border-brand-border hover:border-zinc-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-400 mb-3 border border-zinc-700/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white">Postgres DB Dumps</h3>
                <p className="mt-1.5 text-xs text-brand-secondary leading-relaxed">
                  Replicate sanitized production databases straight to staging environments without S3 retention.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-brand-dark/40 border border-brand-border hover:border-zinc-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-400 mb-3 border border-zinc-700/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white">CI/CD Artifacts</h3>
                <p className="mt-1.5 text-xs text-brand-secondary leading-relaxed">
                  Pass Docker images and target binaries directly across runner instances and test bare-metals.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* END: Use Cases */}

        {/* BEGIN: Simplified Performance Comparison */}
        <section
          className="py-20 lg:py-24 bg-brand-black border-b border-brand-borderSubtle"
          data-purpose="simplified-benchmarks"
          id="benchmarks"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-lg mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Stream in parallel, not in series.
              </h2>
              <p className="mt-2 text-sm text-brand-secondary">
                Direct pipe latency comparison transferring 25GB on a 1Gbps link.
              </p>
            </div>
            {/* Clean 2-column Comparison Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Traditional Cloud */}
              <div className="rounded-xl bg-brand-dark/30 border border-brand-border p-6">
                <span className="text-xs font-mono uppercase text-zinc-500">Traditional Cloud / S3</span>
                <div className="mt-4">
                  <span className="text-3xl font-bold font-mono text-zinc-300">28m 45s</span>
                  <span className="block text-xs text-zinc-500 mt-1">
                    Double-hop: Upload to S3, then recipient downloads.
                  </span>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between">
                    <span>Egress cost:</span>
                    <span className="text-zinc-300">$0.09 / GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data retention:</span>
                    <span className="text-zinc-300">Retained until deleted</span>
                  </div>
                </div>
              </div>

              {/* dyyrect Direct P2P */}
              <div className="rounded-xl bg-brand-dark/70 border border-white/20 p-6 relative shadow-[0_0_25px_rgba(255,255,255,0.08)]">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono uppercase text-white font-semibold">dyyrect P2P</span>
                  <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold font-mono text-white">3m 12s</span>
                  <span className="block text-xs text-zinc-400 mt-1">
                    Single stream: Source buffers directly into target socket.
                  </span>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border space-y-2 text-xs font-mono text-zinc-300">
                  <div className="flex justify-between">
                    <span>Egress cost:</span>
                    <span className="text-white font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data retention:</span>
                    <span className="text-white font-semibold">0 Bytes retained</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Simplified Performance Comparison */}

        {/* BEGIN: Security & Cryptography Verification Specs Strip */}
        <section
          className="py-16 border-b border-brand-borderSubtle bg-brand-dark/40"
          data-purpose="security-strip"
          id="resources"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
              <div className="space-y-1">
                <div className="text-xs font-mono text-zinc-500 uppercase">Key Exchange</div>
                <div className="text-sm font-semibold text-white font-mono">Curve25519 (ECDH)</div>
                <p className="text-[11px] text-zinc-400">Zero persistent credentials</p>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-zinc-500 uppercase">Payload Cipher</div>
                <div className="text-sm font-semibold text-white font-mono">AES-GCM-256</div>
                <p className="text-[11px] text-zinc-400">Hardware accelerated</p>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-zinc-500 uppercase">Memory Footprint</div>
                <div className="text-sm font-semibold text-white font-mono">RAM-Only Buffer</div>
                <p className="text-[11px] text-zinc-400">Zero disk paging</p>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-zinc-500 uppercase">Audit Status</div>
                <div className="text-sm font-semibold text-white font-mono">Open Verified</div>
                <p className="text-[11px] text-zinc-400">100% Client-Side WebRTC</p>
              </div>
            </div>
          </div>
        </section>
        {/* END: Security Strip */}

        {/* BEGIN: FAQ Section */}
        <section
          className="py-20 lg:py-24 bg-brand-black border-b border-brand-borderSubtle"
          data-purpose="developer-faq"
          id="faq"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-lg mx-auto mb-14">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
                Frequently asked questions.
              </h2>
              <p className="mt-2 text-sm text-brand-secondary">
                Architecture, firewall traversal, and cryptographic specifications.
              </p>
            </div>
            <FaqAccordion />
          </div>
        </section>
        {/* END: FAQ Section */}

        {/* BEGIN: Call to Action */}
        <section className="py-20 lg:py-24 bg-brand-black relative" data-purpose="minimal-cta" id="cta">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white mx-auto mb-6 shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to transfer directly?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-secondary max-w-lg mx-auto">
              No account creation needed. Open an ephemeral channel and begin peer streaming in seconds.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-all duration-150 shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-[0.98]"
                href="#dropzone"
              >
                Open Ephemeral Room
              </a>
              <Link
                className="px-5 py-2.5 rounded-lg bg-brand-card hover:bg-zinc-800 text-zinc-300 text-sm font-medium border border-brand-border transition-colors"
                href="/signup"
              >
                Create Account
              </Link>
            </div>
          </div>
        </section>
        {/* END: Call to Action */}
      </main>

      <Footer />
    </div>
  );
}
