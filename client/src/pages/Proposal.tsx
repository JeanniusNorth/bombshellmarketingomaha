import { useEffect, useRef, useState } from "react";
import { Download, FileText, Printer } from "lucide-react";

export default function ProposalPage() {
  const proposalRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPNG = async () => {
    if (!proposalRef.current) return;
    setDownloading(true);
    try {
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(proposalRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.download = "bombshell-proposal-lead-gen-network.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <style>{printStyles}</style>
      <div className="min-h-screen bg-gray-100 print:bg-white">
        <div className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[900px] mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#201cc5]" />
              <span className="text-sm font-bold text-black uppercase tracking-wider">Project Proposal</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                data-testid="button-print-proposal"
                className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                Save PDF
              </button>
              <button
                onClick={handleDownloadPNG}
                disabled={downloading}
                data-testid="button-download-png"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#ccff00] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#b8e600] transition-colors disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                {downloading ? "Generating..." : "Download PNG"}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto py-8 px-4 print:py-0 print:px-0 print:max-w-none">
          <div
            ref={proposalRef}
            className="bg-white shadow-xl print:shadow-none"
            data-testid="proposal-content"
          >
            <header className="relative bg-[#201cc5] text-white overflow-hidden">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")', mixBlendMode: "overlay" }}
              />
              <div className="relative z-10 px-12 pt-16 pb-14 md:px-16">
                <div className="flex items-start justify-between mb-12">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-display uppercase tracking-tight leading-none text-[#ccff00]">
                      BOMBSHELL
                    </h1>
                    <h1
                      className="text-5xl md:text-6xl font-display uppercase tracking-tight leading-none mt-[-4px]"
                      style={{ WebkitTextStroke: "1px #ccff00", color: "transparent" }}
                    >
                      MARKETING
                    </h1>
                  </div>
                  <div className="text-right text-xs text-white/60 font-sans mt-2 hidden md:block">
                    <p className="font-bold text-white/80 uppercase tracking-widest text-[10px] mb-1">Omaha, Nebraska</p>
                    <p>bombshellmarketingomaha.com</p>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#ccff00] font-bold mb-3">Project Proposal</p>
                  <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight leading-tight">
                    Lead Generation Website Network
                  </h2>
                  <p className="text-white/70 text-sm font-sans mt-3 max-w-xl leading-relaxed">
                    Omaha & Lincoln Roofing, Storm Damage, and Window Services
                  </p>
                </div>
              </div>
              <div className="h-1.5 bg-[#ccff00]" />
            </header>

            <div className="px-12 py-14 md:px-16 font-sans">

              <Section title="Project Overview">
                <P>This project will create a network of 30 local lead generation websites targeting specific search terms related to commercial roofing, residential roofing, storm damage repair, and window services in the Omaha and Lincoln metro areas and surrounding communities.</P>
                <P>Each website will focus on a specific service or keyword group to capture highly targeted search traffic and generate inbound phone calls and quote requests from customers actively searching for these services.</P>
                <P>Targeted search terms and service categories will be reviewed and confirmed with the client prior to development. As part of this process, a Google search term and keyword report will be run to identify high-intent search phrases and opportunities before executing the website builds. This ensures the websites are built around real search demand and not assumptions.</P>
                <P>The goal of this network strategy is to generate leads across multiple services and locations rather than relying on a single website.</P>
              </Section>

              <Section title="Network Strategy">
                <P>Rather than relying on a single website to generate leads, this project creates a network of websites targeting specific services and search terms across Omaha and Lincoln. This increases search visibility across multiple keywords, generates leads from multiple sources, and reduces reliance on paid advertising platforms over time.</P>
                <P>This strategy allows the company to capture leads from multiple services including roofing, storm damage restoration, and window replacement across multiple cities and service areas.</P>
              </Section>

              <Section title="Scope of Work">
                <P>Each website will include:</P>
                <CheckList items={[
                  "Domain setup",
                  "Website design and build",
                  "SEO-optimized service content",
                  "Lead form setup",
                  "Call tracking phone number integration",
                  "Hosting setup",
                  "Google indexing and sitemap submission",
                  "Basic on-page SEO optimization",
                  "Blog content updates",
                  "Ongoing maintenance and updates",
                  "Monthly reporting (traffic, leads, calls)",
                ]} />
                <Highlight label="Total Websites" value="30" />
              </Section>

              <div className="grid md:grid-cols-2 gap-8 mb-12 page-break-inside-avoid">
                <div>
                  <SectionSmall title="Services & Categories Targeted" />
                  <TagList items={[
                    "Commercial Roofing", "Residential Roofing", "Roof Repair", "Flat Roof Repair",
                    "Roof Leak Repair", "Storm Damage Repair", "Hail Damage Repair",
                    "Emergency Roof Repair", "Roof Inspections", "Roof Replacement",
                    "Window Replacement", "Window Installation", "Storm Damage Windows",
                    "Siding & Storm Restoration",
                  ]} />
                </div>
                <div>
                  <SectionSmall title="Locations Targeted" />
                  <TagList items={[
                    "Omaha", "Lincoln", "Papillion", "Bellevue", "Elkhorn",
                    "Bennington", "La Vista", "Council Bluffs", "Surrounding areas",
                  ]} />
                  <p className="text-xs text-black/40 mt-3 italic">Specific services and locations will be finalized before development begins.</p>
                </div>
              </div>

              <Section title="Pricing">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <PriceCard
                    label="Website Build"
                    price="$7,500"
                    sublabel="one-time"
                    details={["$250 per website", "30 websites total"]}
                  />
                  <PriceCard
                    label="Hosting, Maintenance, SEO & Reporting"
                    price="$300"
                    sublabel="per month"
                    details={[
                      "$10 per website per month",
                      "Website hosting & maintenance",
                      "Minor SEO updates",
                      "Blog content updates",
                      "Lead tracking",
                      "Monthly performance reporting",
                      "Ongoing site monitoring",
                    ]}
                  />
                </div>
                <p className="text-xs text-black/50">Domains will be billed annually at approximately $12–$20 per domain per year.</p>
              </Section>

              <Section title="SEO & Lead Generation Timeline">
                <div className="overflow-hidden border border-gray-200 mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#201cc5] text-white">
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Phase</th>
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Website builds", "30–60 days"],
                        ["Google indexing", "2–4 weeks"],
                        ["Initial search visibility", "30–90 days"],
                        ["Initial lead flow", "60–120 days"],
                        ["SEO growth and rankings", "3–9 months"],
                        ["Strong lead flow potential", "6–12 months"],
                      ].map(([phase, timeline], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-5 py-3 text-black/80 font-medium">{phase}</td>
                          <td className="px-5 py-3 text-black/60">{timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-black/50 italic">Google Ads and Meta ads can be used to generate leads immediately while SEO rankings grow.</p>
              </Section>

              <Section title="Lead Forecast (Estimated – Conservative)">
                <P>The following lead projections are conservative estimates based on typical local service SEO performance and lead generation website networks. Actual lead volume will vary depending on search demand, competition, seasonality, service type, and location.</P>
                <Highlight label="Estimated Leads Per Website" value="1–3 leads/month" sub="once indexed and ranking in search engines" />

                <SectionSmall title="Network Lead Forecast" />
                <div className="overflow-hidden border border-gray-200 mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#201cc5] text-white">
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Leads Per Website</th>
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Total Leads / Month</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1 lead per site", "30 leads per month"],
                        ["2 leads per site", "60 leads per month"],
                        ["3 leads per site", "90 leads per month"],
                      ].map(([per, total], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-5 py-3 text-black/80 font-medium">{per}</td>
                          <td className="px-5 py-3 text-[#201cc5] font-bold">{total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#ccff00]/10 border border-[#ccff00]/30 px-6 py-4 mb-8">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#201cc5] mb-1">Estimated Total Leads</p>
                  <p className="text-lg font-display text-black">30 – 90 leads per month <span className="text-sm font-sans text-black/50">(conservative estimate)</span></p>
                </div>

                <SectionSmall title="Annual Lead Forecast" />
                <div className="overflow-hidden border border-gray-200 mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#201cc5] text-white">
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Leads / Month</th>
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Leads / Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[["30", "360"], ["60", "720"], ["90", "1,080"]].map(([m, y], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-5 py-3 text-black/80 font-medium">{m}</td>
                          <td className="px-5 py-3 text-[#201cc5] font-bold">{y}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Cost Per Lead Estimate">
                <SectionSmall title="Year 1 (Includes Website Build)" />
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <StatBox label="Website Builds" value="$7,500" />
                  <StatBox label="Annual Hosting" value="$3,600" />
                  <StatBox label="Total Year 1" value="$11,100" accent />
                </div>
                <div className="overflow-hidden border border-gray-200 mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#201cc5] text-white">
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Leads / Year</th>
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Cost Per Lead</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[["360", "~$30 per lead"], ["720", "~$15 per lead"], ["1,080", "~$10 per lead"]].map(([leads, cost], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-5 py-3 text-black/80 font-medium">{leads}</td>
                          <td className="px-5 py-3 text-black/60">{cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <SectionSmall title="Year 2 and Beyond (Hosting Only)" />
                <p className="text-sm text-black/60 mb-4">Annual cost: <strong className="text-black">$3,600</strong></p>
                <div className="overflow-hidden border border-gray-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#201cc5] text-white">
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Leads / Year</th>
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Cost Per Lead</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[["360", "~$10 per lead"], ["720", "~$5 per lead"], ["1,080", "~$3 per lead"]].map(([leads, cost], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-5 py-3 text-black/80 font-medium">{leads}</td>
                          <td className="px-5 py-3 text-[#201cc5] font-bold">{cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-[#ccff00]/10 border border-[#ccff00]/30 px-6 py-4 mb-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#201cc5] mb-1">Estimated Ongoing Cost Per Lead (After Year 1)</p>
                  <p className="text-lg font-display text-black">$3 – $10 per lead <span className="text-sm font-sans text-black/50">(conservative estimate)</span></p>
                </div>
              </Section>

              <Section title="Reporting">
                <P>Monthly reports will include:</P>
                <CheckList items={[
                  "Website traffic",
                  "Leads generated",
                  "Phone call tracking",
                  "Form submissions",
                  "Website performance",
                  "SEO progress",
                ]} />
                <p className="text-sm text-black/50 italic">Reports will be sent monthly.</p>
              </Section>

              <Section title="Website Ownership & Management">
                <P>All domains, websites, hosting accounts, tracking numbers, and website content are part of the ongoing lead generation and marketing service and will be owned and managed by Bombshell Marketing unless otherwise agreed in writing. The websites are built and maintained as part of the lead generation network and service agreement.</P>
              </Section>

              <Section title="Lead Volume Disclaimer">
                <div className="bg-gray-50 border border-gray-200 px-6 py-5 text-xs text-black/60 leading-relaxed">
                  <p className="mb-3">Lead forecasts and timelines provided in this proposal are estimates based on typical local service SEO and lead generation performance. Actual lead volume, search rankings, and timelines may vary depending on search demand, competition, service offerings, service areas, seasonality, and other market factors. Leads and rankings are not guaranteed.</p>
                  <p>SEO and organic lead generation is a long-term strategy, and results typically improve over time as websites gain authority and rankings.</p>
                </div>
              </Section>

              <Section title="Payment Terms">
                <CheckList items={[
                  "Website build costs are due prior to website development.",
                  "Monthly hosting and maintenance fees begin once websites are launched.",
                  "Domains are billed annually.",
                  "Ongoing services are billed monthly.",
                ]} />
              </Section>

              <Section title="Scope Changes">
                <P>Any additional website builds, major design changes, additional service areas, or additional marketing services outside the scope of this proposal will be quoted separately.</P>
              </Section>

              <div className="page-break-inside-avoid">
                <Section title="Summary Investment">
                  <div className="overflow-hidden border-2 border-[#201cc5] mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#201cc5] text-white">
                          <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Item</th>
                          <th className="text-right px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Website Builds (30)", "$7,500 one-time"],
                          ["Monthly Hosting & Maintenance", "$300/month"],
                          ["Estimated Leads", "30–90 per month"],
                          ["Estimated Cost Per Lead Year 1", "$10–$30"],
                          ["Estimated Cost Per Lead Year 2+", "$3–$10"],
                        ].map(([item, cost], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="px-5 py-3 text-black/80 font-medium">{item}</td>
                            <td className="px-5 py-3 text-right font-bold text-[#201cc5]">{cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Section>
              </div>

              <Section title="Project Goal">
                <P>The goal of this project is to build a lead generation website network that captures roofing, storm damage, and window leads across Omaha and Lincoln by targeting multiple services and search terms. This strategy increases search visibility, generates consistent inbound leads, and reduces reliance on paid advertising over time.</P>
              </Section>

              <div className="border-t-2 border-[#201cc5] pt-10 mt-12 page-break-inside-avoid">
                <h3 className="text-xl font-display uppercase tracking-tight text-[#201cc5] mb-8">Acceptance</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-black/40 font-bold block mb-3">Client Name</label>
                    <div className="border-b-2 border-black/20 pb-8" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-black/40 font-bold block mb-3">Date</label>
                    <div className="border-b-2 border-black/20 pb-8" />
                  </div>
                </div>
                <div className="mt-8">
                  <label className="text-[10px] uppercase tracking-widest text-black/40 font-bold block mb-3">Signature</label>
                  <div className="border-b-2 border-black/20 pb-8" />
                </div>
              </div>

            </div>

            <footer className="bg-[#201cc5] px-12 py-8 md:px-16">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-display text-[#ccff00] uppercase tracking-tight">Bombshell Marketing</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mt-1">Omaha, Nebraska</p>
                </div>
                <div className="text-right text-xs text-white/50">
                  <p>bombshellmarketingomaha.com</p>
                  <p className="mt-1">jeannius.north@gmail.com</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12 page-break-inside-avoid">
      <h3 className="text-xl font-display uppercase tracking-tight text-[#201cc5] mb-5 pb-2 border-b border-[#201cc5]/10">{title}</h3>
      {children}
    </div>
  );
}

function SectionSmall({ title }: { title: string }) {
  return (
    <h4 className="text-sm font-bold uppercase tracking-widest text-black/70 mb-4">{title}</h4>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-black/70 leading-relaxed mb-4">{children}</p>;
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mb-6 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-black/70">
          <span className="w-1.5 h-1.5 bg-[#ccff00] mt-1.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {items.map((item, i) => (
        <span key={i} className="px-3 py-1.5 bg-gray-100 text-xs text-black/70 font-medium">{item}</span>
      ))}
    </div>
  );
}

function Highlight({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-[#201cc5] px-6 py-5 mb-8">
      <p className="text-[10px] uppercase tracking-widest text-[#ccff00] font-bold mb-1">{label}</p>
      <p className="text-2xl font-display text-white">{value}</p>
      {sub && <p className="text-xs text-white/50 mt-1">{sub}</p>}
    </div>
  );
}

function PriceCard({ label, price, sublabel, details }: { label: string; price: string; sublabel: string; details: string[] }) {
  return (
    <div className="border border-gray-200 p-6">
      <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold mb-3">{label}</p>
      <p className="text-3xl font-display text-[#201cc5] mb-0">{price}</p>
      <p className="text-xs text-black/40 mb-4">{sublabel}</p>
      <ul className="space-y-1.5">
        {details.map((d, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-black/60">
            <span className="w-1 h-1 bg-[#ccff00] mt-1.5 flex-shrink-0" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatBox({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`px-5 py-4 text-center ${accent ? "bg-[#201cc5]" : "bg-gray-50 border border-gray-200"}`}>
      <p className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${accent ? "text-[#ccff00]" : "text-black/40"}`}>{label}</p>
      <p className={`text-xl font-display ${accent ? "text-white" : "text-black"}`}>{value}</p>
    </div>
  );
}

const printStyles = `
  @media print {
    .no-print { display: none !important; }
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page-break-inside-avoid { page-break-inside: avoid; }
    @page { margin: 0; size: A4; }
  }
`;
