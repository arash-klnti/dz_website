import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dropzone Robotics – Foundational Perception",
  description: "Perception for emergency medical care.",
  title: "Dropzone Robotics",
  description: "AI-Driven Perception and Robotics for Emergency Medical Response",
  icons: {
    icon: "/favicon.png", // or .png
    apple: "/apple-touch-icon.png",
  },  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
