import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms and Conditions — dyyrect",
  description: "Terms of Service, Zero-Retention Guarantees, Privacy Policy and Legal Agreement for dyyrect P2P Protocol.",
};

export default function TermsPage() {
  return (
    <div className="bg-brand-black text-brand-light font-sans antialiased min-h-screen relative flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-white/[0.04] via-zinc-600/[0.015] to-transparent blur-3xl opacity-70"></div>
        <div className="fixed inset-0 tech-grid opacity-30"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Banner */}
          <div className="mb-12 border-b border-brand-borderSubtle pb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-dark border border-brand-border text-xs text-brand-secondary mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]"></span>
              <span className="font-mono">LEGAL PROTOCOL SPECIFICATION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-mono">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Last updated: October 2026. Please read these terms carefully before utilizing the dyyrect direct peer-to-peer file streaming protocol and services.
            </p>
          </div>

          {/* Quick Contact & Summary Box */}
          <div className="p-6 rounded-xl bg-brand-surface/70 border border-brand-border mb-12 backdrop-blur-sm">
            <h2 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Direct Summary &amp; Zero Retention Principle
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              dyyrect operates on a 100% decentralized, peer-to-peer architecture. Transferred files stream memory-to-memory across WebRTC channels and are never stored, staged, cached, or monitored on central servers.
            </p>
            <div className="mt-4 pt-4 border-t border-brand-border flex flex-wrap gap-6 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">Legal Contact:</span>
                <a href="mailto:support@dyyrect.com" className="text-white hover:underline">
                  support@dyyrect.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">Hotline:</span>
                <a href="tel:+18003997328" className="text-white hover:underline">
                  +1 (800) 399-7328
                </a>
              </div>
            </div>
          </div>

          {/* Document Content */}
          <div className="space-y-12 text-sm text-zinc-300 leading-relaxed">
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                <span className="text-zinc-500 font-mono text-xs">01.</span>
                Acceptance of Terms
              </h3>
              <p>
                By accessing or using dyyrect (&quot;the Service&quot;, &quot;Protocol&quot;, &quot;Platform&quot;), including our web interface, CLI tooling, and signaling infrastructure, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you must not access or utilize the Service.
              </p>
            </section>

            {/* Section 2 */}
            <section id="zero-retention" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                <span className="text-zinc-500 font-mono text-xs">02.</span>
                Zero-Retention Architecture &amp; Data Transmission
              </h3>
              <p>
                dyyrect is architected to facilitate direct, browser-to-browser and endpoint-to-endpoint data transmission using standard WebSockets signaling and WebRTC DataChannels.
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400">
                <li>Files and data packets stream directly between sending and receiving peers in RAM memory.</li>
                <li>No persistent disk storage, temporary caching, or middleman servers hold file payloads at any time.</li>
                <li>Signaling servers solely facilitate the initial handshake exchange (SDP offer/answer and ICE candidate routing) and disconnect once peers are connected.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="encryption" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                <span className="text-zinc-500 font-mono text-xs">03.</span>
                Cryptographic Security &amp; End-to-End Encryption
              </h3>
              <p>
                All transmissions over dyyrect are encrypted by default using DTLS (Datagram Transport Layer Security) and AES-GCM-256 ciphers. Keys are generated client-side inside the connecting user agents and are never transmitted to dyyrect operators or third parties.
              </p>
            </section>

            {/* Section 4 */}
            <section id="acceptable-use" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                <span className="text-zinc-500 font-mono text-xs">04.</span>
                Acceptable Use Policy
              </h3>
              <p>
                Users agree to utilize dyyrect exclusively for lawful purposes. You agree not to use the Service to transmit:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400">
                <li>Malicious payloads, viruses, ransomware, or exploits designed to compromise computer systems.</li>
                <li>Unlawful, abusive, fraudulent, or harassing content.</li>
                <li>Material that infringes upon copyright, trademarks, trade secrets, or intellectual property rights of any party.</li>
                <li>Automated high-frequency network attacks against signaling nodes or STUN/TURN infrastructure.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="privacy" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                <span className="text-zinc-500 font-mono text-xs">05.</span>
                Privacy Policy &amp; Telemetry
              </h3>
              <p>
                We believe privacy is an absolute fundamental right. dyyrect does not collect personal identity information, browsing history, or file metadata. For registered accounts, we store only encrypted authentication credentials required for profile sessions.
              </p>
            </section>

            {/* Section 6 */}
            <section id="liability" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                <span className="text-zinc-500 font-mono text-xs">06.</span>
                Disclaimer of Warranties &amp; Limitation of Liability
              </h3>
              <p>
                The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. dyyrect disclaims all liability for data loss, network interruptions, firewall connection failures, or direct/indirect damages arising from the use of the protocol.
              </p>
            </section>

            {/* Section 7 */}
            <section id="license" className="scroll-mt-24 space-y-3">
              <h3 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                <span className="text-zinc-500 font-mono text-xs">07.</span>
                Open Source Licensing (Apache 2.0)
              </h3>
              <p>
                The underlying protocol drivers and CLI tooling are licensed under the Apache License, Version 2.0. You may obtain a copy of the License at <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noreferrer" className="text-white underline hover:text-zinc-300 font-mono">apache.org/licenses/LICENSE-2.0</a>.
              </p>
            </section>

            {/* Section 8 */}
            <section id="contact-info" className="scroll-mt-24 space-y-4 pt-6 border-t border-brand-borderSubtle">
              <h3 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
                <span className="text-zinc-500 font-mono text-xs">08.</span>
                Contact &amp; Legal Notices
              </h3>
              <p>
                For questions regarding these Terms and Conditions, security inquiries, or enterprise SLA assistance, contact our legal and support team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono">
                <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <div className="text-xs text-zinc-500 uppercase">Support &amp; Legal Email</div>
                  <a href="mailto:support@dyyrect.com" className="text-white hover:underline font-semibold text-sm mt-1 inline-block">
                    support@dyyrect.com
                  </a>
                  <div className="text-[11px] text-zinc-500 mt-0.5">General &amp; Compliance Inquiries</div>
                </div>

                <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <div className="text-xs text-zinc-500 uppercase">Direct Contact Number</div>
                  <a href="tel:+18003997328" className="text-white hover:underline font-semibold text-sm mt-1 inline-block">
                    +1 (800) 399-7328
                  </a>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Toll-Free 24/7 Hotline</div>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-16 pt-8 border-t border-brand-borderSubtle flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              Get Started with dyyrect
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
