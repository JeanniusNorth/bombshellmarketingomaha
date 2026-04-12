import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import missionImage1 from "@/assets/images/mission-1_1.jpg";
import missionImage2 from "@/assets/images/mission-2_1.jpg";

export function Mission() {
  const lineVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    })
  };

  const imageVariant = {
    hidden: { scale: 0, rotate: 0 },
    visible: { 
      scale: 1, 
      rotate: 3,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }
    }
  };
  
  const imageVariant2 = {
    hidden: { scale: 0, rotate: 0 },
    visible: { 
      scale: 1, 
      rotate: -3,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }
    }
  };

  const badgeVariant = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: -2,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const badgeVariant2 = {
    hidden: { scale: 0.8, opacity: 0, rotate: 5 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 2,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.6
      }
    }
  };

  return (
    <section className="bg-[#000000] py-16 relative overflow-hidden">
        {/* Container */}
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto text-center leading-[1.1] font-display tracking-tighter">
                
                {/* Line 1 */}
                <motion.div 
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={lineVariant}
                  className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 text-3xl md:text-5xl lg:text-6xl mb-1 md:mb-3"
                >
                    <motion.div variants={badgeVariant} className="relative inline-block transform">
                        <span className="bg-white text-transparent px-4 py-1 rounded-full border border-white relative z-10 block" style={{ WebkitTextStroke: '1px black' }}>
                            We Are Creators,
                        </span>
                    </motion.div>
                    <span className="text-white">Innovators, and Storytellers</span>
                </motion.div>

                {/* Line 2 */}
                <motion.div 
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={lineVariant}
                  className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 text-3xl md:text-5xl lg:text-6xl mb-1 md:mb-3"
                >
                    <span className="text-white">Committed to Understanding</span>
                     <motion.div variants={imageVariant} className="h-8 w-16 md:h-12 md:w-32 rounded-full overflow-hidden inline-block align-middle border border-white/20 transform">
                        <img src={missionImage1} alt="Creative" className="w-full h-full object-cover" />
                    </motion.div>
                    <span className="text-white">Each Brand's</span>
                </motion.div>

                 {/* Line 3 */}
                <motion.div 
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={lineVariant}
                  className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 text-3xl md:text-5xl lg:text-6xl mb-1 md:mb-3"
                >
                    <span className="text-white">Unique</span>
                    <motion.div variants={imageVariant2} className="h-8 w-16 md:h-12 md:w-32 rounded-full overflow-hidden inline-block align-middle border border-white/20 transform">
                        <img src={missionImage2} alt="Identity" className="w-full h-full object-cover" />
                    </motion.div>
                    <span className="text-white">Identity.</span>
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>We Immerse Ourselves In</span>
                </motion.div>

                {/* Line 4 */}
                 <motion.div 
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={lineVariant}
                  className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 text-3xl md:text-5xl lg:text-6xl mb-1 md:mb-3"
                >
                    <span className="text-white">Your Vision, Blending Strategy With</span>
                    <span className="text-white">Creativity</span>
                    <span className="text-white">To</span>
                 </motion.div>

                 {/* Line 5 */}
                 <motion.div 
                  custom={4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={lineVariant}
                  className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 text-3xl md:text-5xl lg:text-6xl mb-1 md:mb-3"
                >
                    <motion.div variants={badgeVariant2} className="relative inline-block transform">
                        <span className="bg-white text-transparent px-4 py-1 rounded-full border border-white relative z-10 block" style={{ WebkitTextStroke: '1px black' }}>
                            Build Brands
                        </span>
                    </motion.div>
                    <span className="text-white">That Don't Just Exist but Thrive in the</span>
                 </motion.div>

                 {/* Line 6 */}
                 <motion.div 
                  custom={5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={lineVariant}
                  className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 text-3xl md:text-5xl lg:text-6xl mt-1 md:mt-2"
                >
                    <span className="text-white">Hearts of Their</span>
                    <span className="text-transparent transform -skew-x-12 inline-block" style={{ WebkitTextStroke: '1px white' }}>
                        Audiences.
                    </span>
                 </motion.div>

            </div>

             <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center items-center gap-2 text-white/50 text-xs font-bold tracking-[0.2em] uppercase"
            >
                <Sparkles className="w-4 h-4 text-[#ffffff]" />
                BOMBSHELL AI MARKETING ®
             </motion.div>
        </div>
    </section>
  )
}