import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Academic Atelier | Premium College Consulting",
  description:
    "Personalized, student-first college consulting. We help students preserve their authentic voice while crafting standout applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <LoadingScreen>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LoadingScreen>
      </body>
    </html>
  );
}
