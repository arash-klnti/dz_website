"use client";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur z-40">
      <div className="container flex items-center justify-between h-16">
        {/* Brand (logo + name) */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/logo.jpg"                // put your file in /public (e.g. /public/logo.svg or .png)
            alt="Dropzone Robotics logo"
            width={32}
            height={32}
            priority
          />
          <span>Dropzone Robotics</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/products">Products</Link>
          <Link href="/team">Team</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact" className="btn">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
