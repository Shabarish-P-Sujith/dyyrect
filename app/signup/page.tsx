"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordless, setPasswordless] = useState(true);
  const [region, setRegion] = useState("auto");
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRegistered(true);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-200 font-sans antialiased flex flex-col justify-between relative selection:bg-terminal-neon selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-40 z-0"></div>
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-terminal-neon/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* BEGIN: TopBar */}
      <header
        className="relative z-10 w-full px-6 py-6 lg:px-12 flex items-center justify-between border-b border-white/[0.04]"
        data-purpose="top-navigation"
      >
        {/* Brand Logo */}
        <Link
          className="flex items-center gap-2.5 group transition-transform"
          data-purpose="brand-link"
          href="/"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-terminal-neon group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#00FF66]"></div>
          <span className="text-xl font-bold tracking-tight text-white font-mono">
            dyyrect
          </span>
          <span className="ml-2 px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
            v2.4 p2p
          </span>
        </Link>

        {/* Return Link */}
        <Link
          className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-transparent hover:border-zinc-800 hover:bg-zinc-900/60"
          data-purpose="back-link"
          href="/"
        >
          <svg
            aria-hidden="true"
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span>Back to overview</span>
        </Link>
      </header>
      {/* END: TopBar */}

      {/* BEGIN: MainContent */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-[430px] mx-auto" data-purpose="auth-card-container">
          {registered ? (
            <div className="relative bg-onyx-card/90 backdrop-blur-xl border border-terminal-neon/30 rounded-2xl p-7 sm:p-9 neon-glow shadow-2xl text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-terminal-neon/10 border border-terminal-neon/30 text-terminal-neon flex items-center justify-center mx-auto shadow-neon-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Peer Handle Created!</h2>
              <p className="text-xs text-zinc-400 font-mono">
                Your peer node handle <span className="text-terminal-neon font-bold">{username || "alex"}.peer</span> is now reserved on the global mesh.
              </p>
              <div className="pt-2">
                <Link
                  href="/login"
                  className="inline-block w-full py-3 px-4 rounded-xl bg-terminal-neon hover:bg-terminal-dim text-black font-semibold text-sm transition-all btn-green-glow font-mono uppercase"
                >
                  Proceed to Login
                </Link>
              </div>
            </div>
          ) : (
            /* Card Container */
            <div className="relative bg-onyx-card/90 backdrop-blur-xl border border-onyx-border rounded-2xl p-7 sm:p-9 neon-glow shadow-2xl">
              {/* Header Text */}
              <div className="text-center mb-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-terminal-neon/10 border border-terminal-neon/20 text-terminal-neon text-[11px] font-mono uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-terminal-neon animate-pulse shadow-[0_0_6px_#00FF66]"></span>
                  Zero Cloud Storage
                </div>
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                  Create your account
                </h1>
                <p className="text-xs text-zinc-400 mt-1.5">
                  Direct peer-to-peer data transport at wire rate
                </p>
              </div>

              {/* SSO Priority Stack */}
              <div className="space-y-2.5 mb-6" data-purpose="sso-options">
                {/* GitHub SSO */}
                <button
                  className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl bg-onyx-elevated hover:bg-[#202027] border border-onyx-border text-sm font-medium text-white transition-all duration-150 group cursor-pointer"
                  type="button"
                  onClick={() => {
                    setUsername("github-builder");
                    setEmail("builder@github.com");
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 fill-current text-white group-hover:scale-105 transition-transform"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span>Continue with GitHub</span>
                </button>

                {/* Alternative SSOs in row */}
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Google */}
                  <button
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-onyx-elevated hover:bg-[#202027] border border-onyx-border text-xs font-medium text-zinc-300 transition-colors cursor-pointer"
                    type="button"
                    onClick={() => {
                      setUsername("google-dev");
                      setEmail("dev@gmail.com");
                    }}
                  >
                    <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path
                        d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.4l3.7 2.9C6.5 7.4 9 5 12 5z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.6 14.7c-.2-.7-.4-1.5-.4-2.7 0-1.1.2-1.9.4-2.7L1.9 6.4C.7 8.8 0 10.8 0 12s.7 3.2 1.9 5.6l3.7-2.9z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.3L1.9 16c1.8 3.8 5.6 7 10.1 7z"
                        fill="#34A853"
                      />
                    </svg>
                    <span>Google</span>
                  </button>

                  {/* Apple */}
                  <button
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-onyx-elevated hover:bg-[#202027] border border-onyx-border text-xs font-medium text-zinc-300 transition-colors cursor-pointer"
                    type="button"
                    onClick={() => {
                      setUsername("apple-dev");
                      setEmail("dev@icloud.com");
                    }}
                  >
                    <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.91.04-2.03.61-2.69 1.38-.58.67-1.09 1.77-.95 2.82 1.02.08 2.07-.5 2.7-1.27z" />
                    </svg>
                    <span>Apple</span>
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800"></div>
                </div>
                <span className="relative px-3 text-[11px] uppercase tracking-wider font-mono bg-onyx-card text-zinc-400">
                  or manual credentials
                </span>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSignup} className="space-y-4" data-purpose="signup-form">
                {/* Full Name / Username Field */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5" htmlFor="name">
                    Username or handle
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-onyx-input border border-onyx-border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-terminal-neon focus:ring-1 focus:ring-terminal-neon font-mono transition-colors"
                      id="name"
                      name="name"
                      placeholder="e.g. alex-tensor"
                      required
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <span className="absolute right-3.5 top-2.5 text-xs text-zinc-400 font-mono">
                      .peer
                    </span>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5" htmlFor="email">
                    Work or developer email
                  </label>
                  <input
                    className="w-full bg-onyx-input border border-onyx-border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-terminal-neon focus:ring-1 focus:ring-terminal-neon transition-colors font-mono text-[13px]"
                    id="email"
                    name="email"
                    placeholder="alex@company.io"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Passwordless Magic Link Toggle */}
                <div className="p-3 rounded-xl bg-onyx-elevated/70 border border-onyx-border flex items-start gap-3">
                  <input
                    checked={passwordless}
                    onChange={(e) => setPasswordless(e.target.checked)}
                    className="mt-0.5 rounded border-zinc-700 bg-onyx-input text-terminal-neon focus:ring-terminal-neon/40 focus:ring-offset-0 focus:ring-1 accent-[#00FF66]"
                    id="magic-code"
                    name="magic-code"
                    type="checkbox"
                  />
                  <label
                    className="text-xs text-zinc-300 leading-snug cursor-pointer select-none"
                    htmlFor="magic-code"
                  >
                    <span className="font-medium text-white block">Email passwordless login code</span>
                    Ephemeral one-time key with Curve25519 payload session.
                  </label>
                </div>

                {/* Region / Node Selection */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-medium text-zinc-400" htmlFor="relay-node">
                      Default Signaling Region
                    </label>
                    <span className="text-[10px] text-zinc-400 font-mono">Auto Hole-Punch</span>
                  </div>
                  <select
                    className="w-full bg-onyx-input border border-onyx-border rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-terminal-neon focus:ring-1 focus:ring-terminal-neon font-mono"
                    id="relay-node"
                    name="relay-node"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value="auto">Global Nearest Edge (Latency-based)</option>
                    <option value="us-east">US East (N. Virginia)</option>
                    <option value="eu-west">EU West (Frankfurt)</option>
                    <option value="ap-southeast">AP Southeast (Singapore)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-terminal-neon hover:bg-terminal-dim text-black font-semibold text-sm tracking-tight transition-all duration-200 btn-green-glow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  type="submit"
                  disabled={loading}
                >
                  <span>{loading ? "Registering peer node..." : "Create account"}</span>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </button>
              </form>

              {/* Login Redirect Link */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80 text-center text-xs text-zinc-400">
                Already have an account?{" "}
                <Link
                  className="text-zinc-200 hover:text-terminal-neon font-medium underline underline-offset-4 decoration-zinc-700 transition-colors ml-1"
                  href="/login"
                >
                  Sign in
                </Link>
              </div>
            </div>
          )}

          {/* Legal / Compliance Footnote */}
          <p className="text-center text-[11px] text-zinc-400 mt-6 leading-relaxed max-w-[360px] mx-auto">
            By creating an account, you agree to dyyrect&apos;s{" "}
            <a className="underline hover:text-zinc-300 transition-colors" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="underline hover:text-zinc-300 transition-colors" href="#">
              Data Processing Agreement
            </a>
            . Zero data is retained on relay nodes.
          </p>
        </div>
      </main>
      {/* END: MainContent */}

      {/* BEGIN: SiteFooter */}
      <footer
        className="relative z-10 w-full px-6 py-6 border-t border-white/[0.04] text-xs font-mono text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3"
        data-purpose="site-footer"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-terminal-neon shadow-[0_0_6px_#00FF66]"></span>
          <span>STUN / TURN Relays Operational (99.99%)</span>
        </div>
        <div className="flex items-center gap-6">
          <a className="hover:text-zinc-300 transition-colors" href="/#cli">
            Terminal CLI
          </a>
          <a className="hover:text-zinc-300 transition-colors" href="/#resources">
            WebRTC Specs
          </a>
          <a className="hover:text-zinc-300 transition-colors" href="/#resources">
            Security Audit
          </a>
          <span className="text-zinc-700">|</span>
          <span>© {new Date().getFullYear()} dyyrect</span>
        </div>
      </footer>
      {/* END: SiteFooter */}
    </div>
  );
}
