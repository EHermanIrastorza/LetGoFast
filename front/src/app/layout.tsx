import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { AuthProvider } from "@/context/authContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Let's Go Fast",
  description: "A faster way to test your supercars and take one with you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased `}
      >
        <AuthProvider>
        <Navbar />
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
