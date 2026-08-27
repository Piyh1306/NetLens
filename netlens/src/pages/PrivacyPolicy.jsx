import PageHero from "../components/ui/PageHero";

const sections = [
  { title: "Information We Collect", body: "As an academic demonstration project, NetLens does not collect real personal data. Any form submissions on this site (contact, login, registration) are UI-only and are not transmitted or stored." },
  { title: "How Simulated Data Is Used", body: "Traffic, alerts, and packet data shown throughout the site are generated for demonstration purposes and do not represent real network activity or real individuals." },
  { title: "Cookies", body: "This demonstration site does not use tracking cookies or third-party analytics." },
  { title: "Third-Party Links", body: "Social and download links included in the interface are placeholders included to complete the demonstration and may not resolve to live destinations." },
  { title: "Contact", body: "For questions about this project, reach out via the Contact page." },
];

export default function PrivacyPolicy() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated July 2026." crumbs={[{ label: "Privacy Policy" }]} />
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
