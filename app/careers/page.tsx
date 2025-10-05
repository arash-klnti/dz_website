import Link from "next/link";
const jobs = [
  { title: "Perception/ML Engineer (Edge)", link: "/contact" },
  { title: "Embedded Software Engineer", link: "/contact" },
  { title: "Field Engineer (Robotics)", link: "/contact" },
];
export default function Careers() {
  return (
    <div className="section">
      <div className="container grid-auto">
        {jobs.map(j => (
          <div key={j.title} className="card flex items-center justify-between">
            <div className="font-semibold">{j.title}</div>
            <Link href={j.link} className="btn">Apply</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
