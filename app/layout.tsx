import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/dm-mono/300.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "TroveJob — Coming Soon",
  description: "A curated job board for people who care about their work. Launching soon.",
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
