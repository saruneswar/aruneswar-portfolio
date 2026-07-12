import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-VERCEL-DOMAIN.vercel.app"),
  title: "Aruneswar S | Electrical & Electronics Engineer",
  description: "Premium engineering portfolio of Aruneswar S, specializing in Power Systems, Industrial Automation, and Hardware Development.",
  keywords: ["Electrical Engineer", "Electronics Engineer", "Industrial Automation", "Power Systems", "Embedded Systems", "Hardware Development"],
  authors: [{ name: "Aruneswar S" }],
  creator: "Aruneswar S",
  openGraph: {
    title: "Aruneswar S | Electrical & Electronics Engineer",
    description: "Premium engineering portfolio of Aruneswar S, specializing in Power Systems, Industrial Automation, and Hardware Development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aruneswar S | Portfolio",
    description: "Premium engineering portfolio of Aruneswar S, specializing in Power Systems and Industrial Automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
