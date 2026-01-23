import { Sparkles } from "lucide-react";
import missionImage1 from "@/assets/images/mission-1_1.jpg";
import missionImage2 from "@/assets/images/mission-2_1.jpg";

export function Mission() {
  return (
    <section className="bg-[#1a1b4b] py-24 relative overflow-hidden">
        {/* Container */}
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto text-center leading-[1.1] font-display uppercase tracking-tighter">
                
                {/* Line 1 */}
                <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 text-4xl md:text-6xl lg:text-7xl mb-2 md:mb-6">
                    <div className="relative inline-block transform -rotate-2">
                        <span className="bg-blue-600 text-transparent px-6 py-2 rounded-full border border-blue-600 relative z-10 block" style={{ WebkitTextStroke: '1px white' }}>
                            WE ARE CREATORS,
                        </span>
                    </div>
                    <span className="text-white">INNOVATORS, AND, STORYTELLERS</span>
                </div>

                {/* Line 2 */}
                <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 text-4xl md:text-6xl lg:text-7xl mb-2 md:mb-6">
                    <span className="text-white">COMMITTED TO UNDERSTANDING</span>
                     <div className="h-10 w-24 md:h-16 md:w-40 rounded-full overflow-hidden inline-block align-middle border border-white/20 transform rotate-3">
                        <img src={missionImage1} alt="Creative" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white">EACH BRAND'S</span>
                </div>

                 {/* Line 3 */}
                <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 text-4xl md:text-6xl lg:text-7xl mb-2 md:mb-6">
                    <span className="text-white">UNIQUE</span>
                    <div className="h-10 w-24 md:h-16 md:w-40 rounded-full overflow-hidden inline-block align-middle border border-white/20 transform -rotate-3">
                        <img src={missionImage2} alt="Identity" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white">IDENTITY.</span>
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>WE IMMERSE OURSELVES IN</span>
                </div>

                {/* Line 4 */}
                 <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 text-4xl md:text-6xl lg:text-7xl mb-2 md:mb-6">
                    <span className="text-white">YOUR VISION, BLENDING STRATEGY WITH</span>
                    <span className="text-[#ccff00]">CREATIVITY</span>
                    <span className="text-white">TO</span>
                 </div>

                 {/* Line 5 */}
                 <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 text-4xl md:text-6xl lg:text-7xl mb-2 md:mb-6">
                    <div className="relative inline-block transform rotate-2">
                        <span className="bg-[#ccff00] text-transparent px-6 py-2 rounded-full border border-[#ccff00] relative z-10 block" style={{ WebkitTextStroke: '1px black' }}>
                            BUILD BRANDS
                        </span>
                    </div>
                    <span className="text-white">THAT DON'T JUST EXIST BUT THRIVE IN THE</span>
                 </div>

                 {/* Line 6 */}
                 <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 text-4xl md:text-6xl lg:text-7xl mt-2 md:mt-4">
                    <span className="text-white">HEARTS OF THEIR</span>
                    <span className="text-transparent transform -skew-x-12 inline-block" style={{ WebkitTextStroke: '1px #ccff00' }}>
                        AUDIENCES.
                    </span>
                 </div>

            </div>

             <div className="mt-20 flex justify-center items-center gap-2 text-white/50 text-xs font-bold tracking-[0.2em] uppercase">
                <Sparkles className="w-4 h-4 text-[#ccff00]" />
                BOMBSHELL AI MARKETING ®
             </div>
        </div>
    </section>
  )
}
