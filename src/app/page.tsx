import Image from "next/image";
import { Brain, Cloud, Database, Code2, ArrowRight } from "lucide-react";

const services = [
  ["AI Strategy", "Identify high-value AI use cases and build a practical adoption roadmap.", Brain],
  ["Enterprise AI Solutions", "LLM apps, RAG assistants, workflow automation and AI-enabled products.", Brain],
  ["Cloud & Platform Engineering", "Modern cloud architecture, migration, scalability and cost optimization.", Cloud],
  ["Data Platforms", "Pipelines, analytics, dashboards and clean data foundations for AI.", Database],
  ["Software Modernization", "Modernize legacy applications, APIs, engineering workflows and delivery practices.", Code2],
];

const caseStudies = [
  {
    title: "AI Knowledge Assistant",
    desc: "An AI assistant that helps teams search, summarize and act on business knowledge faster.",
  },
  {
    label: "AI Software Delivery Accelerator",
    title: "From JIRA requirement to review-ready Pull Request",
    desc: "An AI-powered engineering assistant that helps teams understand requirements, analyze existing code, identify impacted components, generate implementation guidance, create tests and prepare review-ready pull requests.",
    points: [
      "Requirement understanding",
      "Codebase impact analysis",
      "Implementation recommendations",
      "Unit test generation",
      "Technical documentation",
      "Pull Request preparation",
    ],
  },
  {
    title: "AI Modernization Program",
    desc: "A practical modernization approach using AI, automation, cloud and delivery governance.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="UNOVYX Logo"
              width={150}
              height={40}
              priority
              className="h-auto w-[150px]"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#case-studies" className="hover:text-blue-700">Case Studies</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#dbeafe,transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              AI Engineering Company
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
              AI Engineering & Enterprise AI Consulting
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              UNOVYX helps businesses adopt AI through modern software
              engineering, cloud architecture and data platforms.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 hover:bg-blue-800"
              >
                Explore AI for your business <ArrowRight size={18} />
              </a>

              <a
                href="#case-studies"
                className="inline-flex rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 hover:border-blue-300 hover:text-blue-700"
              >
                View Case Studies
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-md">
            <div className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950 text-3xl font-black text-white shadow-2xl">
              AI
            </div>

            {[
              ["Cloud", "left-0 top-10"],
              ["Data", "right-0 top-10"],
              ["Software", "bottom-10 left-1/2 -translate-x-1/2"],
            ].map(([label, position]) => (
              <div
                key={label}
                className={`absolute ${position} rounded-3xl border border-slate-200 bg-white px-8 py-6 text-xl font-bold text-slate-900 shadow-xl`}
              >
                {label}
              </div>
            ))}

            <div className="absolute inset-16 rounded-full border border-blue-200" />
            <div className="absolute inset-6 rounded-full border border-slate-200" />
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              AI at the center. Cloud, data and software as the foundation.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, desc, Icon]) => (
              <article
                key={title as string}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-black">{title as string}</h3>
                <p className="mt-4 leading-7 text-slate-600">{desc as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Case Studies
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Practical AI work that improves delivery and decision-making.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="grid gap-6 py-10 md:grid-cols-[1fr_2fr_auto] md:items-center"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  Case Study
                </p>

                <div>
                  <h3 className="text-3xl font-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold text-blue-700"
                >
                  Discuss this <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Ready to explore AI for your business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Let&apos;s talk about your AI, cloud, data or software modernization
            goals.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@unovyx.com"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-950 hover:bg-blue-50"
            >
              contact@unovyx.com  

            </a>

          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 UNOVYX. AI Engineering & Enterprise AI Consulting.
      </footer>
    </main>
  );
}