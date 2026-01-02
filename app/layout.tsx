import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const appFont = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UIUX Mockup generator App",
  description: "Generate High quality UIUX Mockups with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={appFont.className}>{children}</body>
    </html>
  );
}
