import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MULTIZER LLC | Managed IT Services for Small Business",
  description:
    "MULTIZER LLC has been the trusted IT partner for small businesses since 2015 — system deployment, custom software, helpdesk support, network cabling, backup & disaster recovery, CCTV, and access control.",
  keywords: [
    "managed IT services",
    "small business IT support",
    "network cabling",
    "CCTV installation",
    "access control systems",
    "backup and disaster recovery",
  ],
  openGraph: {
    title: "MULTIZER LLC | Managed IT Services for Small Business",
    description:
      "Your dedicated IT department — system deployment, custom software, helpdesk support, and physical security for small businesses.",
    siteName: "MULTIZER LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
