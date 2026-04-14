import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Conviva — AI-Powered Guest Communication for Holiday Homes",
  description:
    "Conviva gives every holiday home its own intelligent communication layer. Guests message on WhatsApp. You stay in control through Chatwoot. Precision, consistency, and hospitality — at scale.",
  metadataBase: new URL("https://conviva.live"),
  openGraph: {
    title: "Conviva — AI-Powered Guest Communication",
    description: "Smarter guest communication for holiday homes operators.",
    url: "https://conviva.live",
    siteName: "Conviva",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
