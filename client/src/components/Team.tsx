import { useState } from "react";
import { Plus } from "lucide-react";
import jeannieImage from "@/assets/images/team-jeannie.png";
import jessImage from "@/assets/images/team-jess.png";

const teamMembers = [
  {
    id: 1,
    name: "Jeannie North",
    role: "Digital Marketer & Designer",
    image: jeannieImage,
  },
  {
    id: 2,
    name: "Jess Goldoni",
    role: "Digital Marketer & Strategist",
    image: jessImage,
  },
];

export function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="team" className="bg-[#f0f0f0] py-24 relative overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Meet The Expert</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-display text-black uppercase leading-[0.85] mb-8">
              Team Of <br/> Experts
            </h2>
            
            <p className="text-black/60 text-sm leading-relaxed mb-12 max-w-md">
              Our diverse team of creative minds brings together expertise from design, technology, and strategy to build brands that stand out in the digital landscape.
            </p>

            <div className="flex items-start gap-12">
              <div>
                <div className="flex items-center text-4xl font-display text-black mb-2">
                   <span className="text-primary mr-2">✦</span>
                   300<span className="text-primary ml-1 text-2xl">+</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/50">Successful Projects</p>
              </div>
              
              <div>
                <div className="flex items-center text-4xl font-display text-black mb-2">
                   <span className="text-primary mr-2">✦</span>
                   200<span className="text-primary ml-1 text-2xl">+</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/50">Brands Grow Globally</p>
              </div>
            </div>
          </div>

          {/* Right Content - Accordion Team */}
          <div className="lg:col-span-7 h-[500px] flex gap-2">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`relative h-full transition-all duration-500 ease-out cursor-pointer overflow-hidden group flex-1 ${
                  activeIndex === index ? 'grayscale-0' : 'grayscale hover:grayscale-0'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Image Background */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Content (Only visible when active) */}
                <div className={`absolute bottom-0 left-0 p-8 w-full transition-all duration-300 transform ${
                  activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <h3 className="text-3xl font-display uppercase text-white mb-1 leading-none">{member.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
