"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What happens if both peers are behind strict corporate firewalls?",
    answer:
      "dyyrect attempts direct NAT hole-punching via standard STUN servers. In symmetric NAT scenarios where hole-punching fails, it seamlessly falls back to stateless, encrypted TURN relay servers that simply pipe raw encrypted WebRTC datagrams without decrypting or saving a single byte.",
  },
  {
    question: "Is there an arbitrary file size limit on transfers?",
    answer:
      "No hard architectural limit exists. Because dyyrect chunks streams directly into modern browser FileSystem streams or OS disk pipes via Node/Rust headless bindings, your transfer is only bounded by the available storage space on the recipient device.",
  },
  {
    question: "Can dyyrect see or inspect the filenames or contents?",
    answer:
      "No. All metadata (including filename, MIME type, chunk hashes, and binary payload) is encrypted end-to-end between the participating peers before leaving the host memory. The signaling layer handles only randomized session room hashes.",
  },
  {
    question: "Can I use dyyrect inside an automated CI/CD pipeline?",
    answer:
      "Yes. The dyyrect-cli package is built specifically for headless execution in GitHub Actions, GitLab CI, or custom server environments with full headless authorization and webhook completion callbacks.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-lg border border-brand-border bg-brand-dark/50 transition-colors hover:border-zinc-700 overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-4 text-left font-medium text-sm text-white cursor-pointer select-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ml-3 ${
                  isOpen ? "rotate-180 text-terminal-neon" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-1 text-xs text-brand-secondary leading-relaxed border-t border-brand-border/60">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
