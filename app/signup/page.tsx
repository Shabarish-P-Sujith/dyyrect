"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("auto");
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setRegistered(true);
        setTimeout(() => {
          router.push(`/${data.user.role}`);
        }, 1500);
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      setError("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-zinc-200 font-sans antialiased flex flex-col justify-between relative selection:bg-white selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-40 z-0"></div>
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none z-0"></div>

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
          <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(255,255,255,0.7)]"></div>
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
            <div className="relative bg-onyx-card/90 backdrop-blur-xl border border-white/20 rounded-2xl p-7 sm:p-9 shadow-2xl text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Account Created!</h2>
              <p className="text-xs text-zinc-400 font-mono">
                Your account <span className="text-white font-bold">{email}</span> has been successfully registered.
              </p>
              <div className="pt-2">
                <Link
                  href="/login"
                  className="inline-block w-full py-3 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] font-mono uppercase"
                >
                  Proceed to Login
                </Link>
              </div>
            </div>
          ) : (
            /* Card Container */
            <div className="relative bg-onyx-card/90 backdrop-blur-xl border border-onyx-border rounded-2xl p-7 sm:p-9 shadow-2xl">
              {/* Header Text */}
              <div className="text-center mb-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[11px] font-mono uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.7)]"></span>
                  Zero Cloud Storage
                </div>
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                  Create your account
                </h1>
                <p className="text-xs text-zinc-400 mt-1.5">
                  Sign up to access your dashboard
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
                    <svg aria-hidden="true" className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.55 0 9.8-4.04 10-9.5H12v3.7h5.6c-.6 2.2-2.5 3.8-5.6 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.8.5 3.8 1.4l2.8-2.8C16.9 3.2 14.6 2 12 2z"/>
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
                {error && (
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs text-center font-mono">
                    {error}
                  </div>
                )}
                {/* Full Name / Username Field */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-onyx-input border border-onyx-border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white font-mono transition-colors"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5" htmlFor="email">
                    Email address
                  </label>
                  <input
                    className="w-full bg-onyx-input border border-onyx-border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors font-mono text-[13px]"
                    id="email"
                    name="email"
                    placeholder="alex@company.io"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="w-full bg-onyx-input border border-onyx-border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors font-mono text-[13px]"
                    id="password"
                    name="password"
                    placeholder="••••••••••••••••"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
                    className="w-full bg-onyx-input border border-onyx-border rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-white font-mono"
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
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-sm tracking-tight transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  type="submit"
                  disabled={loading}
                >
                  <span>{loading ? "Creating account..." : "Create account"}</span>
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
                  className="text-white hover:underline font-medium underline-offset-4 decoration-zinc-700 transition-colors ml-1"
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
            <Link className="underline text-white hover:text-zinc-300 transition-colors" href="/terms">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className="underline text-white hover:text-zinc-300 transition-colors" href="/terms#privacy">
              Data Privacy Agreement
            </Link>
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
          <span className="inline-block w-2 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]"></span>
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
