import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slightly Functioning | A Casual EU World of Warcraft Guild",
  description: "A relaxed, adult-focused World of Warcraft guild for EU players. Mythic+, Saturday raids, PvP, conversation and absolutely no pressure.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
