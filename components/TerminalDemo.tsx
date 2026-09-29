"use client";

import { useState } from "react";

export default function TerminalDemo() {
  const [activeTab, setActiveTab] = useState<"send" | "receive" | "cicd">("send");
  const [copied, setCopied] = useState(false);

  const getCommand = () => {
    switch (activeTab) {
      case "send":
        return "npx dyyrect send ./model-weights-v3.bin";
      case "receive":
        return "npx dyyrect receive 884-102-p9";
      case "cicd":
        return "tar -czf - ./build | dyyrect send --token=$DYYRECT_KEY --stdout";
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCommand());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-brand-dark/95 border border-brand-border overflow-hidden shadow-2xl">
      {/* Terminal Header & Tabs */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-brand-card/80 border-b border-brand-border">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
          <span className="text-[11px] font-mono text-zinc-500 ml-2">bash / zsh</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1 text-xs font-mono">
            <button
              onClick={() => setActiveTab("send")}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeTab === "send"
                  ? "bg-zinc-800/90 text-white border border-zinc-700 font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              send
            </button>
            <button
              onClick={() => setActiveTab("receive")}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeTab === "receive"
                  ? "bg-zinc-800/90 text-white border border-zinc-700 font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              receive
            </button>
            <button
              onClick={() => setActiveTab("cicd")}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeTab === "cicd"
                  ? "bg-zinc-800/90 text-white border border-zinc-700 font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              ci/cd
            </button>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-1.5 text-zinc-400 hover:text-terminal-neon transition-colors text-xs font-mono flex items-center gap-1"
            title="Copy command"
          >
            {copied ? (
              <span className="text-terminal-neon text-[11px]">copied!</span>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs text-zinc-300 space-y-2 overflow-x-auto leading-relaxed">
        {activeTab === "send" && (
          <>
            <p className="text-zinc-500"># Send any file or folder directly to another machine</p>
            <p>
              <span className="text-terminal-neon">$</span> npx dyyrect send ./model-weights-v3.bin
            </p>
            <p className="text-zinc-400 pt-1">✔ Initializing stateless WebRTC listener...</p>
            <p className="text-zinc-400">✔ Ephemeral Noise_XX keys generated [AES-GCM-256]</p>
            <p className="text-zinc-400">✔ NAT Type: Full Cone (Direct P2P Available)</p>
            <div className="mt-2 p-2.5 rounded bg-brand-black/80 border border-zinc-800 text-zinc-200">
              <span className="text-zinc-500 text-[11px] block">Receiver Command:</span>
              <span className="text-terminal-neon font-bold">dyyrect receive 884-102-p9</span>
            </div>
            <p className="text-zinc-500 pt-2"># Or stream via pipes straight to remote untar:</p>
            <p>
              <span className="text-terminal-neon">$</span> tar -czf - ./build | dyyrect send --stdout
            </p>
          </>
        )}

        {activeTab === "receive" && (
          <>
            <p className="text-zinc-500"># Receive payload using ephemeral session room code</p>
            <p>
              <span className="text-terminal-neon">$</span> npx dyyrect receive 884-102-p9
            </p>
            <p className="text-zinc-400 pt-1">✔ Resolved signaling node: Frankfurt (14ms)</p>
            <p className="text-zinc-400">✔ Handshake verified: Curve25519 diffie-hellman</p>
            <p className="text-zinc-400">✔ Receiving: model-weights-v3.bin (42.8 GB)</p>
            <div className="mt-2 p-2.5 rounded bg-brand-black/80 border border-zinc-800 font-mono">
              <div className="flex justify-between text-[11px] text-zinc-400 mb-1">
                <span>Progress: 84% [================&gt;....]</span>
                <span className="text-terminal-neon">118.4 MB/s</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-terminal-neon h-full w-[84%] rounded-full shadow-[0_0_8px_#00FF66]"></div>
              </div>
            </div>
          </>
        )}

        {activeTab === "cicd" && (
          <>
            <p className="text-zinc-500"># Headless distribution in GitHub Actions / Docker</p>
            <p>
              <span className="text-terminal-neon">$</span> export DYYRECT_HEADLESS=true
            </p>
            <p>
              <span className="text-terminal-neon">$</span> dyyrect send ./dist --target=cluster-node-04 --auto-accept
            </p>
            <p className="text-zinc-400 pt-1">✔ Peer cluster authenticated (Zero intermediate S3 egress)</p>
            <p className="text-zinc-400">✔ Memory streaming pipeline active: 1.2 GB/s on 10GbE</p>
            <p className="text-terminal-neon font-semibold pt-1">✔ Transfer complete in 1.48s [Hash: e3b0c442...]</p>
          </>
        )}
      </div>
    </div>
  );
}
