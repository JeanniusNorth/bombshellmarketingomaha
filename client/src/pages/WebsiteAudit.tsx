import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Search, CheckCircle, AlertTriangle, XCircle, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";

interface AuditResult {
  overallScore: number;
  categories: {
    name: string;
    score: number;
    issues: string[];
  }[];
  bounceReasons: string[];
  websiteTitle: string;
  websiteUrl: string;
}

export default function WebsiteAuditPage() {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState("");

  const normalizeUrl = (input: string) => {
    let normalized = input.trim();
    if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) {
      normalized = "https://" + normalized;
    }
    return normalized;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setIsScanning(true);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 500);

    try {
      const response = await fetch("/api/website-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: normalizeUrl(url) }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to analyze website");
      }

      const data = await response.json();
      setProgress(100);
      setTimeout(() => {
        setResult(data);
        setIsScanning(false);
      }, 500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to analyze website");
      setIsScanning(false);
    } finally {
      clearInterval(progressInterval);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <XCircle className="w-5 h-5 text-red-400" />;
  };

  return (
    <>
      <SEO 
        title="Free Website Audit | Bombshell Marketing"
        description="Get a free AI-powered website audit. Analyze your site's performance, SEO, mobile experience, and content. Discover why visitors may be leaving."
        canonicalPath="/website-audit"
        keywords="free website audit, website analysis, SEO checker, website performance, Omaha web design"
      />
      <div className="min-h-screen bg-[hsl(225,90%,20%)]">
        {/* Header */}
        <header className="py-6 px-4 border-b border-white/10">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="https://bombshellmarketingomaha.com" className="text-2xl font-display text-white uppercase tracking-wider" data-testid="link-home">
              Bombshell<span className="text-[hsl(75,100%,50%)]">.</span>
            </Link>
            <a 
              href="https://bombshellmarketingomaha.com/contact" 
              className="text-white/70 hover:text-white text-sm uppercase tracking-widest transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          {!result ? (
            /* Landing / Scanning State */
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-display text-white uppercase mb-6">
                Free Website<br />
                <span className="text-[hsl(75,100%,50%)]">Audit</span>
              </h1>
              <p className="text-white/70 mb-12 text-lg">
                Get an AI-powered analysis of your website's performance, SEO, mobile experience, and content quality.
              </p>

              {!isScanning ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Enter your website URL (e.g., omahadogbar.com)"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 text-lg focus:outline-none focus:border-[hsl(75,100%,50%)] transition-colors"
                      required
                      data-testid="url-input"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  </div>
                  
                  {error && (
                    <p className="text-red-400 text-sm" data-testid="text-error">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[hsl(75,100%,50%)] text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
                    data-testid="analyze-button"
                  >
                    Analyze My Website
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Scanning Animation */
                <div className="space-y-8">
                  <div className="relative w-48 h-48 mx-auto">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="hsl(75,100%,50%)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${progress * 2.83} 283`}
                        className="transition-all duration-300"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-display text-white" data-testid="text-progress">{Math.round(progress)}%</span>
                    </div>
                  </div>
                  <p className="text-white/70 animate-pulse" data-testid="text-analyzing-url">
                    Analyzing {url}...
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Results State */
            <div className="max-w-4xl mx-auto">
              {/* Overall Score */}
              <div className="text-center mb-12">
                <h2 className="text-2xl font-display text-white uppercase mb-4">
                  Audit Results for
                </h2>
                <a 
                  href={result.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[hsl(75,100%,50%)] hover:underline flex items-center justify-center gap-2 text-lg mb-8"
                  data-testid="link-website-result"
                >
                  {result.websiteTitle || result.websiteUrl}
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="relative w-48 h-48 mx-auto mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={result.overallScore >= 80 ? "#22c55e" : result.overallScore >= 50 ? "#eab308" : "#ef4444"}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${result.overallScore * 2.83} 283`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-5xl font-display ${getScoreColor(result.overallScore)}`} data-testid="text-overall-score">
                      {result.overallScore}
                    </span>
                    <span className="text-white/50 text-sm uppercase">Overall</span>
                  </div>
                </div>
              </div>

              {/* Category Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-testid="category-grid">
                {result.categories.map((category, catIndex) => (
                  <div 
                    key={category.name}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-colors"
                    data-testid={`card-category-${catIndex}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-display text-white uppercase" data-testid={`text-category-name-${catIndex}`}>{category.name}</h3>
                      <div className="flex items-center gap-2">
                        {getScoreIcon(category.score)}
                        <span className={`text-2xl font-display ${getScoreColor(category.score)}`} data-testid={`text-category-score-${catIndex}`}>
                          {category.score}
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-white/10 mb-4">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          category.score >= 80 ? "bg-green-400" : 
                          category.score >= 50 ? "bg-yellow-400" : "bg-red-400"
                        }`}
                        style={{ width: `${category.score}%` }}
                      />
                    </div>

                    {/* Issues */}
                    <ul className="space-y-2" data-testid={`list-issues-${catIndex}`}>
                      {category.issues.map((issue, i) => (
                        <li key={i} className="text-white/70 text-sm flex items-start gap-2" data-testid={`text-issue-${catIndex}-${i}`}>
                          <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bounce Reasons */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 mb-12" data-testid="bounce-reasons-section">
                <h3 className="text-2xl font-display text-white uppercase mb-6 flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-red-400" />
                  Why Visitors May Leave
                </h3>
                <ul className="space-y-4" data-testid="list-bounce-reasons">
                  {result.bounceReasons.map((reason, i) => (
                    <li key={i} className="text-white/70 flex items-start gap-3" data-testid={`text-bounce-reason-${i}`}>
                      <span className="w-6 h-6 bg-red-500/20 text-red-400 flex items-center justify-center text-sm flex-shrink-0">
                        {i + 1}
                      </span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-[hsl(75,100%,50%)] p-8 text-center">
                <h3 className="text-3xl font-display text-black uppercase mb-4">
                  Ready to Take Action?
                </h3>
                <p className="text-black/70 mb-6">
                  Book your free 30-minute new web design consult
                </p>
                <a
                  href="https://bombshellmarketingomaha.com/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-[hsl(225,90%,20%)] transition-colors"
                  data-testid="book-consult-button"
                >
                  Book Web Consult
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Scan Again */}
              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setResult(null);
                    setUrl("");
                    setProgress(0);
                  }}
                  className="text-white/50 hover:text-white text-sm uppercase tracking-widest transition-colors"
                  data-testid="button-scan-another"
                >
                  Scan Another Website
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4 text-center">
            <a 
              href="https://bombshellmarketingomaha.com" 
              className="text-white/50 hover:text-white text-sm transition-colors"
              data-testid="link-footer"
            >
              Built by Bombshell Marketing
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
