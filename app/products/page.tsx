import Image from "next/image";

export default function Products() {
  return (
    <div className="section">
      <div className="container grid gap-12">
        <header>
          <h1 className="h1">Products</h1>
          <p className="lead mt-2">Perception software and rugged AI-enabled hardware packages for military, EMS, and robotic platforms.</p>
        </header>

        {/* Foundational Perception Model */}
        <section className="grid gap-6 md:grid-cols-2 items-start">
          <div className="card">
            <h2 className="h2">Foundational Perception Model</h2>
            <p className="mt-3 text-slate-700">
              Our core model provides multi-person detection and tracking, upper-body segmentation and posture classification, and medical tool recognition with association to specific patients and timestamps. 
              Built to run fully on the edge, it delivers low-latency outputs for documentation workflows, training/simulation, and robotic assistance—without relying on the cloud. 
              The model is hardened for outdoor variability (harsh lighting, motion, occlusion) using targeted data collection and synthetic augmentation.
            </p>
          </div>
          <div className="card">
            <div className="aspect-video w-full bg-slate-100 rounded-xl grid place-items-center">
              <Image src="/tech1.jpg" alt="products" width={640} height={40} />
              

            </div>
          </div>
        </section>

        {/* Rugged Hardware Platforms */}
        <section className="grid gap-4">
          <h2 className="h2">Rugged Hardware Platforms</h2>
          <p className="text-slate-700">
            We package the perception system into field-ready configurations for <strong>military medics</strong>, <strong>civilian EMS</strong>, and <strong>robotic platforms</strong>. 
            Each kit pairs passive vision sensors with edge compute in an IP-rated, thermally managed enclosure, with mounting options for helmets, chest rigs, and UGV payload bays. 
            Outputs integrate with training and documentation systems and can expose APIs for robotic control or telemetry.
          </p>
          <div className="grid-auto mt-2">
            <div className="card">
              <div className="font-semibold">Military</div>
              <p className="text-slate-600 mt-2">Helmet or UGV configurations; optimized for passive sensing and harsh environments.</p>
            </div>
            <div className="card">
              <div className="font-semibold">EMS</div>
              <p className="text-slate-600 mt-2">Responder-friendly form factors with documentation assist and training capture.</p>
            </div>
            <div className="card">
              <div className="font-semibold">Robotics</div>
              <p className="text-slate-600 mt-2">Robot-ready kits with power/thermal integration and API hooks for manipulation and assistance.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
