import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-2 items-center">
        <div>
        <h1 className="mt-4 text-6xl md:text-4xl font-bold leading-tight">
            <span className="block">AI-Driven Perception and Robotics</span>
            <span className="block text-brand">for Emergency Medical Response</span>
          </h1>

          <p className="lead mt-4 max-w-2xl text-slate-700">
            Built with medics, for medics — to save lives when every second counts.
          </p>

          <p className="mt-4 text-slate-700 max-w-2xl">
            Our edge-AI systems deliver real-time vision, documentation, and robotic assistance
            for military and EMS responders — operating reliably, offline, and in the toughest conditions.
          </p>

          <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
            <li>Detect and track patients, tools, and procedures</li>
            <li>Automate documentation and reporting</li>
            <li>Enable robotic operation and collaboration</li>
            <li>Support training and performance evaluation</li>
            <li>Operate fully offline, at the edge</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <Link href="/products" className="btn">See Products</Link>
            <Link href="/contact" className="btn-outline">Request a Demo</Link>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <Image src="/dha-SBIR.jpg" alt="DHA SBIR" width={320} height={120} />
              <Image src="/fuse.jpeg" alt="FUSE Accelerator" width={130} height={40} />
            </div>
          </div>
        </div>
        <div className="card">
        <div className="w-full max-w-md mx-auto my-auto flex items-center justify-center bg-white rounded-lg p-5">
          <Image
            src="/hero1.svg"
            alt="AI-assisted medic field response"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>
        </div>
      </div>
    </section>
  );
}
