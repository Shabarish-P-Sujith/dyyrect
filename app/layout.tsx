import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "dyyrect — Direct Peer-to-Peer File Streaming",
  description:
    "Direct browser-to-browser streaming. Stream files peer-to-peer straight between browsers, servers, and automated pipelines with zero cloud storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-black text-brand-light selection:bg-terminal-neon/30 selection:text-terminal-neon">
        {children}
      </body>
    </html>
  );
}
