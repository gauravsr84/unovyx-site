import { ArrowRight, BriefcaseBusiness, Building2, GraduationCap } from "lucide-react";

const individualPrograms = [
  {
    title: "AI for IT Professionals",
    tagline: "Practical. Relevant. Career-focused.",
    desc: "Transform the way software is designed, built, tested, deployed and managed using AI.",
    icon: BriefcaseBusiness,
    audience: ["Software Engineers", "QA Engineers", "Product Managers", "Business Analysts", "Data Professionals"],
    learn: ["AI foundations for work", "Prompt engineering", "AI tools for productivity", "AI automation use cases"],
    cta: "Enquire Now",
  },
  {
    title: "AI for Students",
    tagline: "Learn. Build. Grow.",
    desc: "Learn AI from scratch through practical concepts, guided projects and career-focused learning.",
    icon: GraduationCap,
    audience: ["College Students", "Freshers", "Final Year Students", "Anyone interested in AI & Tech"],
    learn: ["AI basics made easy", "Prompting & AI tools", "Python for AI", "Build AI projects", "Career readiness"],
    cta: "Enquire Now",
  },
];

const enterpriseOfferings = [
  "Executive AI Awareness Workshops",
  "Team AI Upskilling Programs",
  "Prompt Engineering & Productivity Training",
  "Agentic AI and Automation Bootcamps",
  "Custom AI Learning Paths",
  "AI Adoption & Governance Workshops",
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            UNOVYX AI Academy
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-5xl">
            Ditya Batra lives in London.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Practical AI learning programs for professionals, students and organizations.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
          {individualPrograms.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.title}
                className="rounded-[2rem] border border-blue-100 bg-gradient-to-b from-white to-blue-50 p-8 shadow-sm"
              >
                <p className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
                  {program.tagline}
                </p>

                <div className="mt-8 flex items-start justify-between gap-6">
                  <div>
                    <h2 className="text-4xl font-black tracking-tight">
                      {program.title}
                    </h2>
                    <p className="mt-4 max-w-xl leading-7 text-slate-600">
                      {program.desc}
                    </p>
                  </div>

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
                    <Icon size={34} />
                  </div>
                </div>

                <div className="mt-8 grid gap-8 border-t border-blue-100 pt-8 md:grid-cols-2">
                  <div>
                    <h3 className="font-black">Who is it for?</h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      {program.audience.map((item) => (
                        <li key={item}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-black">What you&apos;ll learn</h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      {program.learn.map((item) => (
                        <li key={item}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
                >
                  {program.cta} <ArrowRight size={18} />
                </a>
                <a
                    href="/pdf/ai_for_it_professionals_program_guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 inline-flex items-center gap-2 rounded-full border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
                    >
                    📄 Download Program Guide
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700">
              <Building2 size={30} />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-blue-300">
              Enterprise AI Training
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Build AI-ready teams across your organization.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Structured workshops and custom training programs for organizations that want to enable teams with practical, responsible and role-based AI skills.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-slate-950 hover:bg-blue-50"
            >
              Talk to Us <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {enterpriseOfferings.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-4xl font-black tracking-tight">
            Want to start an AI learning program?
          </h2>
          <p className="mt-4 text-slate-600">
            Reach out for professional batches, student programs or enterprise AI training.
          </p>
          <a
            href="mailto:gaurav@unovyx.com"
            className="mt-8 inline-flex rounded-full bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800"
          >
            contact@unovyx.com
          </a>
        </div>
      </section>
    </main>
  );
}