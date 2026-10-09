"use client";

import { useState } from "react";
import Link from "next/link";

export default function TransferDropzone() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [transferState, setTransferState] = useState<"idle" | "ready" | "streaming">("idle");
  const [roomCode, setRoomCode] = useState<string>("");

  const handleSimulateSelect = (name: string) => {
    setSelectedFile(name);
    setTransferState("ready");
    setRoomCode(
      `${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}-${Math.random().toString(36).substring(2, 4)}`
    );
  };

  const handleStartStream = () => {
    setTransferState("streaming");
  };

  const handleReset = () => {
    setSelectedFile(null);
    setTransferState("idle");
    setRoomCode("");
  };

  return (
    <div
      id="dropzone"
      className="max-w-3xl mx-auto px-6 -mt-6 mb-16 relative z-20"
    >
      <div className="rounded-2xl border border-brand-border bg-brand-card/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle top inner highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

        {transferState === "idle" && (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsHovered(true);
            }}
            onDragLeave={() => setIsHovered(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsHovered(false);
              if (e.dataTransfer.files.length > 0) {
                handleSimulateSelect(e.dataTransfer.files[0].name);
              }
            }}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
              isHovered
                ? "border-white/80 bg-white/[0.04]"
                : "border-brand-border hover:border-zinc-700 bg-brand-dark/40"
            }`}
            onClick={() => handleSimulateSelect("production-dataset-v2.tar.gz (18.4 GB)")}
          >
            <div className="w-12 h-12 rounded-full bg-zinc-800/80 border border-brand-border flex items-center justify-center mx-auto mb-4 text-white shadow-[0_0_15px_rgba(255,255,255,0.12)]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white">
              Drop files here for instant P2P streaming
            </h3>
            <p className="text-xs text-brand-secondary mt-1.5 max-w-md mx-auto">
              Files stream directly to peer browser via WebRTC. No uploads to server, no size ceiling.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono border border-zinc-700 transition-colors"
              >
                Browse Files
              </button>
              <span className="text-zinc-500 text-xs font-mono">or click to simulate sample transfer</span>
            </div>
          </div>
        )}

        {transferState === "ready" && (
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white font-mono text-xs font-bold">
                  P2P
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{selectedFile}</div>
                  <div className="text-[11px] font-mono text-zinc-500">
                    Chunked via 64KB SCTP frames • AES-GCM-256
                  </div>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="text-xs text-zinc-500 hover:text-zinc-300 font-mono"
              >
                Cancel
              </button>
            </div>

            <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono uppercase">Ephemeral Room Code:</span>
                <span className="text-xs font-mono text-white bg-white/10 px-2 py-0.5 rounded border border-white/20 font-bold">
                  {roomCode}
                </span>
              </div>
              <p className="text-xs text-brand-secondary">
                Share this link or room code with the recipient. Streaming will begin immediately upon connection.
              </p>
              <div className="flex gap-2">
                <input
                  readOnly
                  value={`https://dyyrect.io/p2p/${roomCode}`}
                  className="flex-1 bg-brand-black border border-brand-border rounded-lg px-3 py-1.5 text-xs font-mono text-zinc-300 select-all"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(`https://dyyrect.io/p2p/${roomCode}`)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-white transition-colors"
                >
                  Copy Link
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>Listening for receiver handshake...</span>
              </div>
              <button
                onClick={handleStartStream}
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                Simulate Direct Transfer
              </button>
            </div>
          </div>
        )}

        {transferState === "streaming" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="text-sm font-semibold text-white font-mono">
                  Streaming Active: {selectedFile}
                </span>
              </div>
              <span className="text-xs font-mono text-white font-bold">142.6 MB/s</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>Progress (12.8 GB / 18.4 GB)</span>
                <span className="text-white font-semibold">69%</span>
              </div>
              <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
                <div className="bg-white h-full w-[69%] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300"></div>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-zinc-500 pt-1">
                <span>Latency: 12ms (Direct NAT-PMP socket)</span>
                <span>ETA: ~38s</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleReset}
                className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono transition-colors"
              >
                Finish &amp; Close Room
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
