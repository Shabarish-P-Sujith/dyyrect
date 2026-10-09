"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    setError(null);
    setSubmitting(true);
    
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setAuthSuccess(true);
        router.push(`/${data.user.role}`);
      } else {
        setError(data.error || "Authentication failed");
      }
    } catch (err) {
      setError("Network error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-onyx-950 text-neutral-200 antialiased flex flex-col justify-between relative selection:bg-white selection:text-black">
      {/* Background Ambience Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-grid-subtle z-0"></div>
      <div className="fixed inset-0 pointer-events-none bg-radial-flare z-0"></div>

      {/* BEGIN: MainHeader */}
      <header className="relative z-10 w-full px-6 py-5 flex items-center justify-between border-b border-white/[0.04]">
        {/* Return back to marketing homepage */}
        <Link
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-150 group"
          href="/"
        >
          <span className="text-neutral-500 group-hover:-translate-x-0.5 transition-transform duration-150">
            ←
          </span>
          <span>Back to dyyrect.io</span>
        </Link>

        {/* Live peer network status indicator */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-onyx-900 border border-white/[0.06] text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]"></span>
          </span>
          <span className="text-neutral-300">Mesh Online</span>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-500 text-[11px]">894-102 nodes</span>
        </div>
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: AuthContent */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-[420px] mx-auto">
          {/* Logo Branding Header */}
          <div className="flex flex-col items-center text-center mb-8" data-purpose="login-branding">
            {/* dyyrect Identity Mark */}
            <Link className="inline-flex items-center gap-2.5 mb-5 group" href="/">
              <span className="h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-transform group-hover:scale-110"></span>
              <span className="text-2xl font-bold tracking-tight text-white font-mono">
                dyyrect
              </span>
            </Link>
            <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">
              Welcome back
            </h1>
            <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
              Access your peer nodes, CLI session keys, and zero-retention transfer channels.
            </p>
          </div>

          {authSuccess ? (
            <div className="rounded-xl border border-white/20 bg-onyx-900/90 backdrop-blur-md p-7 text-center shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-white">Authenticated to Node</h2>
              <p className="text-xs text-neutral-400 font-mono">
                Session established for <span className="text-white font-semibold">{email}</span>. Handshake active on Curve25519 channel.
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-block w-full py-2.5 px-4 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase font-mono shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  Go to Transfer Console
                </Link>
              </div>
            </div>
          ) : (
            /* Main Login Container Card */
            <div
              className="rounded-xl border border-white/[0.08] bg-onyx-900/80 backdrop-blur-md p-6 sm:p-7 shadow-2xl shadow-black/80"
              data-purpose="auth-card"
            >
              {/* BEGIN: SSO OAuth Grid */}
              <div className="space-y-3" data-purpose="social-auth">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2 font-medium">
                  Quick Authenticate
                </div>
                <div className="grid grid-cols-4 gap-2.5">
                  {/* GitHub Auth */}
                  <button
                    aria-label="Sign in with GitHub"
                    className="h-10 flex items-center justify-center rounded-lg bg-onyx-800 border border-white/[0.07] hover:border-white/[0.22] hover:bg-onyx-700 interactive-transition group cursor-pointer"
                    title="Continue with GitHub"
                    type="button"
                    onClick={() => {
                      setEmail("github-user@dyyrect.io");
                      setPassword("password123");
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 fill-neutral-300 group-hover:fill-white transition-colors"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Google Auth */}
                  <button
                    aria-label="Sign in with Google"
                    className="h-10 flex items-center justify-center rounded-lg bg-onyx-800 border border-white/[0.07] hover:border-white/[0.22] hover:bg-onyx-700 interactive-transition group cursor-pointer"
                    title="Continue with Google"
                    type="button"
                    onClick={() => {
                      setEmail("google-user@dyyrect.io");
                      setPassword("password123");
                    }}
                  >
                    <svg aria-hidden="true" className="h-4 w-4 fill-neutral-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.55 0 9.8-4.04 10-9.5H12v3.7h5.6c-.6 2.2-2.5 3.8-5.6 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.8.5 3.8 1.4l2.8-2.8C16.9 3.2 14.6 2 12 2z"/>
                    </svg>
                  </button>

                  {/* Apple Auth */}
                  <button
                    aria-label="Sign in with Apple"
                    className="h-10 flex items-center justify-center rounded-lg bg-onyx-800 border border-white/[0.07] hover:border-white/[0.22] hover:bg-onyx-700 interactive-transition group cursor-pointer"
                    title="Continue with Apple"
                    type="button"
                    onClick={() => {
                      setEmail("apple-user@dyyrect.io");
                      setPassword("password123");
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 fill-neutral-300 group-hover:fill-white transition-colors"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73.99.08 2.01-.5 2.63-1.23" />
                    </svg>
                  </button>

                  {/* Passkey / WebAuthn Hardware Key */}
                  <button
                    aria-label="Sign in with Passkey"
                    className="h-10 flex items-center justify-center rounded-lg bg-onyx-800 border border-white/[0.07] hover:border-white/[0.3] hover:bg-onyx-700 interactive-transition group cursor-pointer"
                    title="Continue with FIDO2 / Passkey"
                    type="button"
                    onClick={() => {
                      setEmail("security-key@mesh.node");
                      setAuthSuccess(true);
                    }}
                  >
                    <svg
                      className="h-4 w-4 text-neutral-300 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
                      <path d="m21 2-9.6 9.6" />
                      <circle cx="7.5" cy="15.5" r="5.5" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* END: SSO OAuth Grid */}

              {/* Divider */}
              <div className="relative my-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/[0.07]"></div>
                </div>
                <span className="relative bg-onyx-900 px-3 text-[11px] font-mono uppercase text-neutral-500">
                  or continue with
                </span>
              </div>

              {/* BEGIN: Primary Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs text-center font-mono">
                    {error}
                  </div>
                )}
                {/* Email / Identifier Field */}
                <div>
                  <label
                    className="block text-xs font-medium text-neutral-300 mb-1.5"
                    htmlFor="email"
                  >
                    Email or peer handle
                  </label>
                  <div className="relative">
                    <input
                      autoComplete="username email"
                      className="w-full h-10 px-3.5 rounded-lg bg-onyx-950 border border-white/[0.12] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white interactive-transition font-mono text-[13px]"
                      id="email"
                      name="email"
                      placeholder="name@company.com or @handle"
                      required
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-medium text-neutral-300" htmlFor="password">
                      Password
                    </label>
                    <a
                      className="text-[11px] font-mono text-neutral-500 hover:text-white transition-colors"
                      href="#"
                    >
                      Lost token?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="current-password"
                      className="w-full h-10 px-3.5 rounded-lg bg-onyx-950 border border-white/[0.12] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white interactive-transition font-mono text-[13px]"
                      id="password"
                      name="password"
                      placeholder="••••••••••••••••"
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* Primary Submit Action */}
                <div className="pt-1">
                  <button
                    className="w-full h-10 px-4 rounded-lg bg-white text-black font-semibold text-xs tracking-wide uppercase hover:bg-zinc-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group font-mono shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer disabled:opacity-50"
                    type="submit"
                    disabled={submitting}
                  >
                    <span>
                      {submitting ? "Connecting..." : "Sign In to dyyrect"}
                    </span>
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
                </div>
              </form>
              {/* END: Primary Form */}

              {/* Enterprise SSO Link */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] text-center" data-purpose="enterprise-saml">
                <button
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  type="button"
                  onClick={() => alert("Redirecting to SAML SSO provider...")}
                >
                  <svg className="h-3.5 w-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                  <span>Continue with Single Sign-On (SAML / Okta)</span>
                </button>
              </div>
            </div>
          )}

          {/* Footer Registration link */}
          <div className="mt-6 text-center text-xs text-neutral-400">
            <span>Don&apos;t have an account?</span>
            <Link
              className="font-medium text-white hover:underline underline-offset-4 ml-1"
              href="/signup"
            >
              Sign up
            </Link>
          </div>
        </div>
      </main>
      {/* END: AuthContent */}

      {/* BEGIN: SiteFooter */}
      <footer className="relative z-10 w-full px-6 py-5 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
        {/* Security Protocol Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]"></span>
          <span className="text-neutral-400">End-to-End Encrypted Handshake</span>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <span className="text-neutral-500 hidden sm:inline">Zero Cloud Retention</span>
        </div>

        {/* Legal & Security Links */}
        <div className="flex items-center gap-4 text-[11px]">
          <Link className="hover:text-neutral-300 transition-colors" href="/terms">
            Terms of Service
          </Link>
          <Link className="hover:text-neutral-300 transition-colors" href="/terms#privacy">
            Privacy Policy
          </Link>
          <a className="hover:text-neutral-300 transition-colors" href="/#resources">
            Security Whitepaper
          </a>
          <span className="text-neutral-600">v1.14.8</span>
        </div>
      </footer>
      {/* END: SiteFooter */}
    </div>
  );
}
