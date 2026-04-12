import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import jeannieImage from "@/assets/images/team-jeannie.png";
import jessImage from "@/assets/images/team-jess.png";

const teamMembers = [
  {
    id: 1,
    name: "Jeannie North",
    role: "Digital Marketer & Creative Director",
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
  return (
    <section id="team" className="bg-white py-24 relative overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-black/60 uppercase tracking-widest text-xs font-bold">Meet The Experts</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-display text-black uppercase leading-[0.85] mb-8">
              Creativity <br/> Meets Strategy
            </h2>
            
            <p className="text-black/60 text-sm leading-relaxed mb-12 max-w-md">
              Two Omaha marketing pros with 20+ years experience in digital marketing, design & web and building businesses.
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

          {/* Right Content - Team Cards */}
          <div className="lg:col-span-7 h-[500px] flex gap-2">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="relative h-full transition-all duration-500 ease-out cursor-pointer overflow-hidden group flex-1"
              >
                {/* Image Background */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-0 opacity-100 transition-all duration-300 transform">
                  <h3 className="text-3xl font-display uppercase text-white mb-1 leading-none">{member.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
