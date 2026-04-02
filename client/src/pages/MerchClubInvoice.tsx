import { useEffect } from "react";
import { FileText, Printer } from "lucide-react";

export default function MerchClubInvoicePage() {
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

  const invoiceDate = "April 1, 2026";
  const dueDate = "April 1, 2026";
  const invoiceNumber = "BM-20260401-MC001";

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
              <span className="text-sm font-bold text-black uppercase tracking-wider">Invoice — Merch Club</span>
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
                      Marketing Services & Web Design
                    </h2>
                    <p className="text-white/70 text-sm font-sans mt-2">
                      Monthly Recurring — Merch Club
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
                  <p className="text-sm font-bold text-black">Chris Harwood</p>
                  <p className="text-sm text-black/60">Merch Club</p>
                  <p className="text-sm text-black/60">chris@merchclub.com</p>
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
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2 mt-4">Billing Cycle</p>
                  <p className="text-sm font-bold text-[#201cc5] uppercase">Monthly Recurring</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-display uppercase tracking-tight text-[#201cc5] mb-6">Services</h3>
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
                          <p className="text-black/80 font-medium">Marketing Services & Web Design</p>
                          <p className="text-xs text-black/50 mt-1">Monthly retainer — website management, design updates, marketing strategy & support</p>
                        </td>
                        <td className="px-5 py-4 text-center text-black/80">1</td>
                        <td className="px-5 py-4 text-right text-black/80">$2,000.00</td>
                        <td className="px-5 py-4 text-right font-bold text-black">$2,000.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-[#201cc5]">
                        <td colSpan={3} className="px-5 py-4 text-right font-bold text-black uppercase text-xs tracking-widest">Total Due</td>
                        <td className="px-5 py-4 text-right">
                          <span className="text-xl font-display text-[#201cc5]">$2,000.00</span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="bg-[#201cc5] text-white px-8 py-8 mb-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-2">Amount Due</p>
                    <p className="text-4xl font-display text-[#ccff00]">$2,000.00</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-2">Due Date</p>
                    <p className="text-4xl font-display text-white">April 1, 2026</p>
                  </div>
                </div>
                <p className="text-center text-white/40 text-xs mt-6 uppercase tracking-widest">Recurring Monthly</p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-display uppercase tracking-tight text-[#201cc5] mb-4">Notes</h3>
                <div className="bg-gray-50 border border-gray-200 px-6 py-5 text-xs text-black/60 leading-relaxed space-y-3">
                  <p>This is a monthly recurring invoice. Payment of $2,000.00 is due on the 1st of each month.</p>
                  <p>Services include ongoing marketing support, web design, and digital strategy for Merch Club.</p>
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
