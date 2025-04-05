import type { ReactNode } from "react";

import "@/styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web-Wallet",
  keywords: ["web3", "wallet", "nextjs", "wagmi", "rainbowkit"],
  applicationName: "Web-Wallet",
  description: "Only for testing purposes to create a web3 wallet. Build by Riyan Ghouri.",
  authors: { name: "Riyanghouri786", url: "https://github.com/Riyanghouri786/web-wallet" },
  icons: "favicon.ico",
  manifest: "site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={open_sans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
