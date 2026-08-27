import PageHero from "../components/ui/PageHero";

const sections = [
  { title: "Academic Use Only", body: "NetLens is presented as a final-year B.Sc. IT project for educational and demonstration purposes. It is not a licensed or production security product." },
  { title: "No Warranty", body: "The system, its detection results, and simulated data are provided as-is, without warranty of accuracy, availability, or fitness for real-world deployment." },
  { title: "Simulated Content", body: "Dashboards, live monitoring feeds, and reports throughout this site use generated data and do not reflect a live, monitored network." },
  { title: "Intellectual Property", body: "Project content, design, and documentation belong to the project team and academic institution unless otherwise credited." },
  { title: "Changes to These Terms", body: "These terms may be updated as the project evolves through its academic review process." },
];

export default function Terms() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="Last updated July 2026." crumbs={[{ label: "Terms & Conditions" }]} />
      <section className="section max-w-3xl mx-auto">
        <div className="container-lens space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold text-white mb-3">{s.title}</h2>
              <p className="text-sm text-slate-300 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
