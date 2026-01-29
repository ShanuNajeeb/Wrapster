import React from 'react';
import { Award, ShieldCheck, Users, MapPin } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const features = [
    { title: "EXPERT CRAFTSMANSHIP", desc: "PRECISION DETAILING DRIVEN BY A PASSION FOR AUTOMOTIVE EXCELLENCE.", icon: <Award size={32} /> },
    { title: "PREMIUM MATERIALS", desc: "EXCLUSIVELY USING WORLD-CLASS BRANDS FOR PPF AND VINYL PROTECTION.", icon: <ShieldCheck size={32} /> },
    { title: "CLIENT FOCUSED", desc: "A BESPOKE EXPERIENCE TAILORED TO YOUR VISION, ENSURING TOTAL SATISFACTION.", icon: <Users size={32} /> },
    { title: "DUBAI'S ELITE CHOICE", desc: "THE TRUSTED DESTINATION FOR SUPERCARS ACROSS THE ENTIRE UAE.", icon: <MapPin size={32} /> },
  ];

  return (
    <section className="bg-[#0f0f0f] py-32 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white font-black text-4xl mb-24 font-brand uppercase tracking-[0.25em] relative inline-block">
          WHY WRAPSTERS?
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#ffb703]"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ffb703] mb-10 group-hover:bg-[#ffb703] group-hover:text-black group-hover:shadow-2xl group-hover:shadow-yellow-500/20 transition-all duration-500 transform group-hover:-translate-y-3">
                {f.icon}
              </div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.25em] mb-6 group-hover:text-[#ffb703] transition-all">{f.title}</h4>
              <p className="text-gray-500 text-[10px] font-black leading-loose max-w-[240px] uppercase tracking-[0.15em] opacity-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;