import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="bg-[#ffb703] py-28 px-6 relative overflow-hidden group">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-black font-black text-5xl md:text-6xl mb-8 uppercase font-brand tracking-widest leading-[0.9]">
          READY TO TRANSFORM <br className="hidden md:block" /> YOUR VEHICLE?
        </h2>
        <p className="text-black/80 text-[12px] font-black uppercase tracking-[0.3em] mb-16 max-w-3xl mx-auto leading-relaxed">
          From full body wraps to precise detailing, let our specialists craft your masterpiece. Book your elite consultation today.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
           <button className="w-full md:w-auto bg-black text-white px-16 py-6 rounded-sm font-black uppercase text-[12px] tracking-widest hover:scale-105 transition-premium flex items-center justify-center gap-4 shadow-3xl">
             <Calendar size={20} /> BOOK NOW <ArrowRight size={14} />
           </button>
           <button className="w-full md:w-auto bg-white text-black px-16 py-6 rounded-sm font-black uppercase text-[12px] tracking-widest hover:scale-105 transition-premium flex items-center justify-center gap-4 shadow-xl">
             <Phone size={20} /> CONSULT SPECIALIST
           </button>
        </div>
      </div>

      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-black/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-r from-black/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CTA;