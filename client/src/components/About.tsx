import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="bg-[#e5e5e5] py-24 text-black relative">
       {/* Texture Overlay */}
       <div className="absolute inset-0 opacity-40 pointer-events-none" 
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
       </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Who We Are</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.85] mb-8">
              Creativity <br/> Meets Strategy.
            </h2>
            
            <p className="text-lg md:text-xl text-black/70 font-medium max-w-xl mb-12">
              With a team of passionate designers, developers, and strategists, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 border-2 border-black">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase mb-1">Over 10 Years Experience</h4>
                  <p className="text-sm text-black/60">We've been in the trenches and know what works.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0 border-2 border-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase mb-1">Trusted by Global Brands</h4>
                  <p className="text-sm text-black/60">From startups to Fortune 500s, we deliver excellence.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
                alt="Stylish team member" 
                className="w-full aspect-[3/4] object-cover"
              />
              
              {/* Overlay Statistics Card */}
              <div className="absolute bottom-8 right-8 left-8 bg-white border border-black p-6 shadow-[4px_4px_0px_0px_rgba(204,255,0,1)]">
                 <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold uppercase mb-1">
                        <span>Campaign Launch</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200">
                        <div className="h-full bg-primary w-[90%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold uppercase mb-1">
                        <span>Creative Design</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200">
                        <div className="h-full bg-black w-[85%]"></div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}