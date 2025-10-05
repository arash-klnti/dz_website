import Image from "next/image";
export default function Team() {
  return (
    <div className="section">
      <div className="container grid-auto">
        <div className="card grid gap-3 justify-items-center text-center">
          <div className="h-28 w-28 rounded-full overflow-hidden bg-slate-200">
            <Image
              src="/arash.jpg"   // put your photo in /public
              alt="Arash Kalantari"
              width={112}
              height={112}
            />
          </div>
          <div className="font-semibold">Arash Kalantari, PhD</div>
          <div className="text-slate-600">Founder & CEO</div>
        </div>
        <div className="card grid gap-3 justify-items-center text-center">
          <div className="h-28 w-28 rounded-full overflow-hidden bg-slate-200">
            <Image
              src="/brandon.JPG"   // put your photo in /public
              alt="Brandon Rothrock"
              width={120}
              height={120}
            />
          </div>          
          <div className="font-semibold">Brandon Rothrock, PhD</div>
          <div className="text-slate-600">Perception Lead</div>
        </div>
        <div className="card grid gap-3 justify-items-center text-center">
          <div className="h-28 w-28 rounded-full overflow-hidden bg-slate-200">
            <Image
              src="/charlie.jpg"   // put your photo in /public
              alt="Charlie Cohn"
              width={112}
              height={112}
            />
          </div>
          <div className="font-semibold">Charlie Cohn</div>
          <div className="text-slate-600">Special Operations Medic</div>
        </div>
        <div className="card grid gap-3 justify-items-center text-center">
          <div className="h-28 w-28 rounded-full overflow-hidden bg-slate-200">
            <Image
              src="/sean.jpg"   // put your photo in /public
              alt="Sean Pyles"
              width={112}
              height={112}
            />
          </div>
          <div className="font-semibold">Sean Pyles</div>
          <div className="text-slate-600">Special Forces Medic (18D)</div>
        </div>
        <div className="card grid gap-3 justify-items-center text-center">
          <div className="h-36 w-36 rounded-full overflow-hidden bg-slate-200">
            <Image
              src="/arye.jpg"   // put your photo in /public
              alt="Arye Barnehama"
              width={200}
              height={200}
            />
          </div>
          <div className="font-semibold">Arye Barnehama</div>
          <div className="text-slate-600">Founding Advisor & Investor</div>
        </div>       
      </div>
    </div>
  );
}
