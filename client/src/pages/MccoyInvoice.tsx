import { useEffect } from "react";
import { FileText, Printer } from "lucide-react";

export default function MccoyInvoicePage() {
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

  const today = new Date();
  const invoiceDate = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const dueDate = "Due on Project Start";
  const invoiceNumber = `BM-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}-001`;

  const lineItems = [
    { description: "Lead Generation Website Build", detail: "10 websites × $250 per website", qty: 10, rate: 250, total: 2500 },
    { description: "Website Hosting, Maintenance, SEO Updates & Reporting (12 Months)", detail: "10 websites × $10 per website/month × 12 months", qty: 10, rate: 120, total: 1200 },
  ];

  const buildTotal = 2500;
  const hostingTotal = 1200;

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .print-area, .print-area * { visibility: visible; }
          .print-area { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
          @page { margin: 0.5in; size: letter; }
        }
      `}</style>
      <div className="min-h-screen bg-gray-100 print:bg-white">
        <div className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[900px] mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#201cc5]" />
              <span className="text-sm font-bold text-black uppercase tracking-wider">Invoice</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                data-testid="button-print-invoice"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#ccff00] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#b8e600] transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                Save PDF
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto py-8 px-4 print:py-0 print:px-0 print:max-w-none">
          <div className="print-area bg-white shadow-xl print:shadow-none">

            <header className="relative bg-[#201cc5] text-white overflow-hidden">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")', mixBlendMode: "overlay" }}
              />
              <div className="relative z-10 px-12 pt-14 pb-12 md:px-16">
                <div className="flex items-start justify-between mb-10">
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
                    <p className="mt-2 text-white/50">Jeannie North</p>
                    <p className="text-white/40">Owner | Creative Director</p>
                    <p className="text-white/40">jeannius.north@gmail.com</p>
                    <p className="text-white/40">415-845-8571</p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#ccff00] font-bold mb-3">Invoice</p>
                    <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight leading-tight">
                      Lead Generation Website Network
                    </h2>
                    <p className="text-white/70 text-sm font-sans mt-2">
                      Omaha & Lincoln Roofing, Storm Damage, and Window Services
                    </p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-1">Invoice #</p>
                    <p className="text-sm font-bold text-white">{invoiceNumber}</p>
                  </div>
                </div>
              </div>
              <div className="h-1.5 bg-[#ccff00]" />
            </header>

            <div className="px-12 py-12 md:px-16 font-sans">

              <div className="grid md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-gray-200">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2">Bill To</p>
                  <p className="text-sm font-bold text-black">McCoy Roofing</p>
                  <p className="text-sm text-black/60">Omaha, Nebraska</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2">Invoice Date</p>
                  <p className="text-sm text-black/80">{invoiceDate}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2 mt-4">Due Date</p>
                  <p className="text-sm text-black/80">{dueDate}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2">Payment Method</p>
                  <p className="text-sm text-black/60">Check or Payment Transfer</p>
                  <p className="text-xs text-black/40 mt-1">Check made out to Jeannie North</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2 mt-4">Status</p>
                  <p className="text-sm font-bold text-orange-500 uppercase">Pending</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-display uppercase tracking-tight text-[#201cc5] mb-6">One-Time Website Build</h3>
                <div className="overflow-hidden border-2 border-[#201cc5]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#201cc5] text-white">
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Description</th>
                        <th className="text-center px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Qty</th>
                        <th className="text-right px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Rate</th>
                        <th className="text-right px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="px-5 py-4">
                          <p className="text-black/80 font-medium">{lineItems[0].description}</p>
                          <p className="text-xs text-black/50 mt-1">{lineItems[0].detail}</p>
                        </td>
                        <td className="px-5 py-4 text-center text-black/80">{lineItems[0].qty}</td>
                        <td className="px-5 py-4 text-right text-black/80">${lineItems[0].rate.toFixed(2)}</td>
                        <td className="px-5 py-4 text-right font-bold text-black">${lineItems[0].total.toLocaleString()}.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-[#201cc5]">
                        <td colSpan={3} className="px-5 py-4 text-right font-bold text-black uppercase text-xs tracking-widest">Total Due (Now)</td>
                        <td className="px-5 py-4 text-right">
                          <span className="text-xl font-display text-[#201cc5]">${buildTotal.toLocaleString()}.00</span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-display uppercase tracking-tight text-[#201cc5] mb-6">Hosting, Maintenance, SEO & Reporting (12 Months)</h3>
                <div className="overflow-hidden border-2 border-[#201cc5]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#201cc5] text-white">
                        <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Description</th>
                        <th className="text-center px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Qty</th>
                        <th className="text-right px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Rate</th>
                        <th className="text-right px-5 py-3 text-[10px] uppercase tracking-widest font-bold">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="px-5 py-4">
                          <p className="text-black/80 font-medium">{lineItems[1].description}</p>
                          <p className="text-xs text-black/50 mt-1">{lineItems[1].detail}</p>
                        </td>
                        <td className="px-5 py-4 text-center text-black/80">{lineItems[1].qty}</td>
                        <td className="px-5 py-4 text-right text-black/80">${lineItems[1].rate.toFixed(2)}</td>
                        <td className="px-5 py-4 text-right font-bold text-black">${hostingTotal.toLocaleString()}.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-[#201cc5]">
                        <td colSpan={3} className="px-5 py-4 text-right font-bold text-black uppercase text-xs tracking-widest">Total Due (When Sites Go Live)</td>
                        <td className="px-5 py-4 text-right">
                          <span className="text-xl font-display text-[#201cc5]">${hostingTotal.toLocaleString()}.00</span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <p className="text-xs text-black/50 mt-3 italic">Lump sum payment due when websites go live. Covers 12 months of hosting, maintenance, SEO updates & reporting.</p>
              </div>

              <div className="bg-[#201cc5] text-white px-8 py-8 mb-10">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-2">Website Builds</p>
                    <p className="text-3xl font-display text-[#ccff00]">${buildTotal.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-2">Hosting & Services (12 Mo)</p>
                    <p className="text-3xl font-display text-white">${hostingTotal.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-2">Total Investment</p>
                    <p className="text-3xl font-display text-[#ccff00]">${(buildTotal + hostingTotal).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-display uppercase tracking-tight text-[#201cc5] mb-4">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "10 Lead Generation Websites",
                    "Domain Setup",
                    "SEO-Optimized Service Content",
                    "Lead Form Setup & Lead Notification Directing",
                    "Google Indexing & Sitemap",
                    "Website Hosting",
                    "Ongoing Maintenance & Updates",
                    "Blog Content Updates",
                    "Monthly Performance Reports",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <div className="w-5 h-5 bg-[#ccff00] flex items-center justify-center flex-shrink-0">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <p className="text-sm text-black/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-display uppercase tracking-tight text-[#201cc5] mb-4">Notes</h3>
                <div className="bg-gray-50 border border-gray-200 px-6 py-5 text-xs text-black/60 leading-relaxed space-y-3">
                  <p>Domains will be billed annually at approximately $12–$20 per domain per year.</p>
                  <p>Client (McCoy Roofing) owns all domains, websites, leads, and content.</p>
                  <p>Hosting and services are billed as a lump sum covering 12 months, due when websites go live.</p>
                  <p>Website build costs are due prior to website development.</p>
                </div>
              </div>

              <div className="border-t-2 border-[#201cc5] pt-8 mt-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2">From</p>
                    <p className="text-sm font-bold text-black">Jeannie North</p>
                    <p className="text-sm text-black/60">Bombshell Marketing</p>
                    <p className="text-sm text-black/60">jeannius.north@gmail.com</p>
                    <p className="text-sm text-black/60">415-845-8571</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-black/40 italic">Thank you for your business!</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
