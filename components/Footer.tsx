import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 bg-white">
      <div className="container py-10 flex flex-col items-center text-center gap-6">
        {/* Brand & tagline */}
        <div className="flex flex-col items-center gap-3 max-w-lg">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Dropzone Robotics" width={42} height={42} />
            <span className="font-bold text-xl">Dropzone Robotics</span>
          </div>
          <p className="text-slate-600 text-sm">
            Foundational perception for emergency medical care — advancing situational awareness
            for military medics, EMS responders, and autonomous systems.
          </p>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 text-slate-700 font-medium">
          <Link href="/products" className="hover:text-brand">Products</Link>
          <Link href="/team" className="hover:text-brand">Team</Link>
          <Link href="/technology" className="hover:text-brand">Technology</Link>
          <Link href="/careers" className="hover:text-brand">Careers</Link>
          <Link href="/contact" className="hover:text-brand">Contact</Link>
        </nav>

        {/* Achievements */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-2 opacity-80">
          <Image src="/dha-SBIR.jpg" alt="DHA SBIR" width={260} height={50} />
          <Image src="/fuse.jpeg" alt="FUSE Accelerator" width={100} height={32} />
        </div>
      </div>

      {/* Divider & copyright */}
      <div className="border-t border-slate-200">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Dropzone Robotics. All rights reserved.</p>
          <p className="text-slate-400">Built for reliability in the field.</p>
        </div>
      </div>
    </footer>
  );
}
