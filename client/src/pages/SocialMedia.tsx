import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import heroWomanImage from "@/assets/images/hero-woman.png";

export default function SocialMediaPage() {
  const coverRef = useRef<HTMLDivElement>(null);
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

  const handleDownload = async () => {
    if (!coverRef.current) return;
    setDownloading(true);
    try {
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(coverRef.current, {
        width: 820,
        height: 312,
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = "bombshell-facebook-cover.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-display uppercase tracking-tight text-black mb-2" data-testid="text-page-title">
          Social Media Assets
        </h1>
        <p className="text-black/50 text-sm font-medium mb-12">
          Download-ready graphics for your social media profiles.
        </p>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-display uppercase tracking-tight text-black" data-testid="text-cover-title">
                Facebook Cover Photo
              </h2>
              <p className="text-black/40 text-xs font-medium mt-1">820 × 312px</p>
            </div>
            <button
              onClick={handleDownload}
              disabled={downloading}
              data-testid="button-download-cover"
              className="px-6 py-3 bg-[#1FA88F] text-[#111111] text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-[#1FA88F] transition-all disabled:opacity-50"
            >
              {downloading ? "Generating..." : "Download PNG"}
            </button>
          </div>

          <div className="border border-gray-200 bg-gray-50 p-8 md:p-12 overflow-x-auto">
            <div className="mx-auto" style={{ width: 820 }}>
              <div
                ref={coverRef}
                style={{
                  width: 820,
                  height: 312,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#EDE3E1",
                  fontFamily: "'Anton', sans-serif",
                }}
                data-testid="preview-facebook-cover"
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.15,
                    mixBlendMode: "overlay",
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/noise.png")',
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: 50,
                    top: "50%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    zIndex: 10,
                  }}
                >
                  <StatBlock number="225+" label="Happy Clients" />
                  <StatBlock number="300+" label="Projects Done" />
                  <StatBlock number="4.9" label="Star Rating" showStars />
                </div>

                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "42%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    zIndex: 5,
                    lineHeight: 0.85,
                  }}
                >
                  <div
                    style={{
                      fontSize: 110,
                      color: "#1FA88F",
                      letterSpacing: "-0.04em",
                      fontFamily: "'Anton', sans-serif",
                      textTransform: "uppercase",
                      lineHeight: 0.85,
                    }}
                  >
                    BOMBSHELL
                  </div>
                  <div
                    style={{
                      fontSize: 110,
                      color: "transparent",
                      WebkitTextStroke: "1.5px #1FA88F",
                      letterSpacing: "-0.04em",
                      fontFamily: "'Anton', sans-serif",
                      textTransform: "uppercase",
                      lineHeight: 0.85,
                      marginTop: -4,
                    }}
                  >
                    MARKETING
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      marginTop: 14,
                    }}
                  >
                    Web Design &bull; Logo Design &bull; Brand Photography
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      marginTop: 6,
                    }}
                  >
                    Omaha, Nebraska
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    right: -20,
                    top: "5%",
                    zIndex: 3,
                    opacity: 0.9,
                  }}
                >
                  <img
                    src={heroWomanImage}
                    alt=""
                    crossOrigin="anonymous"
                    style={{
                      height: 280,
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 32,
                    backgroundColor: "#1FA88F",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    zIndex: 20,
                    transform: "rotate(-1deg) scaleX(1.05)",
                    transformOrigin: "left bottom",
                    borderTop: "2px solid black",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 24,
                      whiteSpace: "nowrap",
                      fontFamily: "'Anton', sans-serif",
                      fontSize: 14,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "black",
                    }}
                  >
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span key={i} style={{ display: "flex", gap: 24 }}>
                        <span>Marketing & Digital Strategy</span>
                        <span>*</span>
                        <span>Logo & Brand Design</span>
                        <span>*</span>
                        <span>Web Design</span>
                        <span>*</span>
                        <span>Brand Photography</span>
                        <span>*</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-black/30 text-xs mt-4 text-center">
            Right-click the image or use the download button above to save.
          </p>
        </section>
      </div>
    </div>
  );
}

function StatBlock({
  number,
  label,
  showStars,
}: {
  number: string;
  label: string;
  showStars?: boolean;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontSize: 26,
            fontFamily: "'Anton', sans-serif",
            color: "white",
            lineHeight: 1,
          }}
        >
          {number}
        </span>
        {showStars && (
          <span style={{ display: "flex", gap: 1 }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  fill: "#facc15",
                  color: "#facc15",
                }}
              />
            ))}
          </span>
        )}
      </div>
      <span
        style={{
          fontSize: 8,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.6)",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
        }}
      >
        {label}
      </span>
    </div>
  );
}
