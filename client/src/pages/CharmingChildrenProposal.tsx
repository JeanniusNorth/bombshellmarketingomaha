import { useEffect, useRef } from "react";
import { FileText, Printer, Check } from "lucide-react";

export default function CharmingChildrenProposalPage() {
  const proposalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handlePrint = () => window.print();

  return (
    <>
      <style>{printStyles}</style>
      <div className="min-h-screen bg-gray-100 print:bg-white">
        {/* Top Bar */}
        <div className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[900px] mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-black" />
              <span className="text-sm font-bold text-black uppercase tracking-wider">Project Proposal</span>
            </div>
            <button
              onClick={handlePrint}
              data-testid="button-print-proposal"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Save PDF
            </button>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto py-8 px-4 print:py-0 print:px-0 print:max-w-none">
          <div
            ref={proposalRef}
            className="bg-white shadow-xl print:shadow-none"
            data-testid="proposal-content"
          >
            {/* Header */}
            <header className="bg-black text-white px-10 md:px-14 py-14 print:py-12">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-sm font-display">B</div>
                  <span className="text-sm font-display tracking-wider uppercase">Bombshell Marketing</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Proposal · 2026</p>
              </div>

              <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 font-bold mb-4">Prepared For</p>
              <h1 className="text-5xl md:text-6xl font-display leading-[0.95] mb-3">The Charming Children</h1>
              <p className="text-lg text-white/70 font-medium mb-10">5-Page WordPress Website Redesign</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 mt-10">
                <HeaderStat label="Investment" value="$2,000" />
                <HeaderStat label="Timeline" value="2–3 Weeks" />
                <HeaderStat label="Pages" value="5 Custom" />
              </div>
            </header>

            {/* Project Overview */}
            <Section title="Project Overview" number="01">
              <P>
                We'll redesign and rebuild your website to create a clean, modern, and easy-to-navigate
                experience that reflects your brand and makes it simple for parents to learn about your
                services and get in touch.
              </P>
              <div className="bg-black text-white px-6 py-5 mt-6">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">The Goal</p>
                <p className="text-lg font-display leading-snug">
                  Make your website feel trustworthy, clear, and effortless to use — while increasing inquiries.
                </p>
              </div>
            </Section>

            {/* Scope of Work */}
            <Section title="Scope of Work" number="02">
              <SubHead>5 Custom Pages</SubHead>
              <CheckList
                items={[
                  "Home",
                  "Infants",
                  "Toddlers & Early Preschool",
                  "Preschool",
                  "Contact Us",
                ]}
              />

              <SubHead>Design & Build</SubHead>
              <CheckList
                items={[
                  "Custom layout using WordPress",
                  "Mobile-optimized design (looks great on phones + tablets)",
                  "Clean, modern styling aligned with your brand",
                  "Easy-to-update backend",
                ]}
              />

              <SubHead>Functionality</SubHead>
              <CheckList
                items={[
                  "Contact form setup + testing",
                  "Clear calls-to-action throughout the site",
                  "Basic on-site SEO structure (page titles, meta descriptions, headings)",
                  "Fast-loading, optimized performance",
                ]}
              />

              <SubHead>Content Support</SubHead>
              <CheckList
                items={[
                  "Light copy editing and formatting (using your existing content)",
                  "Guidance on images and layout for best visual impact",
                ]}
              />
            </Section>

            {/* Suggested Add-On Pages */}
            <Section title="Suggested Add-On Pages" number="03">
              <P>
                Optional pages we recommend adding to strengthen trust, pre-qualify leads, and help your
                website convert more parent inquiries.
              </P>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <AddOnCard
                  title="Enrollment / Tuition & Rates"
                  description="Pricing transparency builds trust and pre-qualifies leads before the inquiry call."
                />
                <AddOnCard
                  title="Daily Schedule / A Day in the Life"
                  description="Parents want to picture exactly what their child's day looks like."
                />
                <AddOnCard
                  title="Curriculum / Learning Philosophy"
                  description="Differentiates from competitors and shows expertise."
                />
                <AddOnCard
                  title="Meet the Teachers / Staff"
                  description="Trust-building — parents are choosing people, not just a place."
                />
              </div>
            </Section>

            {/* Investment */}
            <Section title="Investment" number="04">
              <div className="border border-black mb-6">
                <PriceRow label="Total Project Cost" value="$2,500" />
                <PriceRow label="Referral Discount" value="–$500" muted />
                <div className="bg-black text-white px-6 py-5 flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-widest font-bold">Final Investment</p>
                  <p className="text-3xl font-display">$2,000</p>
                </div>
              </div>
              <p className="text-xs text-black/50">
                A 50% deposit is required to begin. Final 50% due upon project completion.
              </p>

              <div className="mt-8 border border-black/10 px-6 py-5">
                <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold mb-2">Ownership & Hosting</p>
                <p className="text-sm text-black/80 leading-relaxed">
                  Hosting, the domain, the website, and all content developed as part of this project will be
                  fully owned by The Charming Children. Upon completion and final payment, full ownership and
                  access transfers to the brand.
                </p>
              </div>
            </Section>

            {/* Timeline */}
            <Section title="Timeline" number="05">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TimelineCard label="Project Kickoff" value="Immediate" sub="Upon proposal approval" />
                <TimelineCard label="Estimated Completion" value="2–3 Weeks" sub="From kickoff date" />
              </div>
            </Section>

            {/* What You Can Expect */}
            <Section title="What You Can Expect" number="06">
              <CheckList
                items={[
                  "A polished, professional website that builds trust instantly",
                  "A structure designed to convert visitors into inquiries",
                  "SEO-optimized pages built to rank on Google for local childcare searches",
                  "A simple backend so you can easily make updates anytime",
                  "Ongoing support available if needed",
                ]}
              />
            </Section>

            {/* Next Steps */}
            <Section title="Next Steps" number="07" last>
              <ol className="space-y-4">
                {[
                  "Approve this proposal",
                  "Submit initial deposit (50%)",
                  "We begin design and build immediately",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-sm text-black/80 leading-relaxed pt-1.5">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-12 bg-black text-white px-8 py-10 text-center">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-3">Ready to begin?</p>
                <p className="text-2xl font-display mb-1">Let's bring your vision to life.</p>
                <p className="text-sm text-white/60">Reply to this proposal or reach out at hello@bombshellmarketingomaha.com</p>
              </div>
            </Section>

            {/* Footer */}
            <footer className="px-10 md:px-14 py-8 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-black/40">
                <p>Prepared by Bombshell Marketing · Omaha, NE</p>
                <p>bombshellmarketingomaha.com</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

function HeaderStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-black px-5 py-4">
      <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">{label}</p>
      <p className="text-xl font-display text-white">{value}</p>
    </div>
  );
}

function Section({
  title,
  number,
  children,
  last,
}: {
  title: string;
  number: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={`px-10 md:px-14 py-12 ${last ? "" : "border-b border-gray-200"} print-section`}>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">{number}</span>
        <h2 className="text-3xl md:text-4xl font-display text-black tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm md:text-base text-black/70 leading-relaxed mb-4">{children}</p>;
}

function SubHead({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xs uppercase tracking-widest text-black font-bold mt-6 mb-3">{children}</h3>;
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-black/80">
          <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-black flex items-center justify-center">
            <Check className="w-3 h-3 text-black" />
          </span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AddOnCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border border-black/10 p-5 hover:border-black transition-colors">
      <div className="flex items-start gap-3 mb-2">
        <span className="shrink-0 mt-1 w-2 h-2 bg-black rounded-full" />
        <h4 className="text-sm font-bold text-black leading-snug">{title}</h4>
      </div>
      <p className="text-xs text-black/60 leading-relaxed pl-5">{description}</p>
    </div>
  );
}

function PriceRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className={`flex items-center justify-between px-6 py-4 border-b border-gray-200 ${muted ? "text-black/50" : "text-black"}`}>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-lg font-display">{value}</p>
    </div>
  );
}

function TimelineCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="border border-black/10 px-6 py-5">
      <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold mb-2">{label}</p>
      <p className="text-2xl font-display text-black mb-1">{value}</p>
      <p className="text-xs text-black/50">{sub}</p>
    </div>
  );
}

const printStyles = `
  @media print {
    .no-print { display: none !important; }
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; margin: 0; padding: 0; }
    @page { margin: 0; size: A4; }
    .page-break-inside-avoid { page-break-inside: avoid; }
    .print-page-break { page-break-before: always; }
    .print-section { page-break-inside: avoid; }
    table { page-break-inside: avoid; }
    h3 { page-break-after: avoid; }
  }
`;
