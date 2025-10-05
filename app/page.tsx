import { Hero } from "@/components/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container grid-auto">
          {['Documentation','Robotic assistance','Training','Caregiver evaluation','Outdoor-capable','Privacy-first'].map(s=>(
            <div key={s} className="card">{s}</div>
          ))}
        </div>
      </section>
    </>
  );
}
