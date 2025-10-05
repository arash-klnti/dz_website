import Image from "next/image";

export default function Technology() {
  return (
    <div className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: content */}
        <div className="flex flex-col gap-6">
          <h1 className="h1">Technology</h1>
          <p className="lead text-slate-700">
            Our technology combines advanced perception, edge optimization, and privacy-first design to deliver
            reliable AI vision for medics and robotic systems in the field.
          </p>

          <div className="grid gap-4">
            <div className="card">
              <strong>Perception Stack:</strong> tracking, segmentation, tools, association.
            </div>
            <div className="card">
              <strong>Edge Optimization:</strong> TensorRT/ONNX, quantization, pruning.
            </div>
            <div className="card">
              <strong>Data & Privacy:</strong> on-device by default, encrypted exports.
            </div>
          </div>
        </div>

        {/* Right side: image */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-md">
            <Image
              src="/tech.png"
              alt="AI-assisted medic field response"
              width={640}
              height={675}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
