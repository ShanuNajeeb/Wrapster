import React from 'react';
import { Shield, Sparkles, Zap, TrendingUp } from 'lucide-react';

const benefits = [
  { title: "MAXIMUM PROTECTION", desc: "Defend against sand, debris, and UV rays with elite-grade armor.", icon: <Shield size={20} /> },
  { title: "BESPOKE AESTHETICS", desc: "Unlimited styling options from satin finishes to chrome deletes.", icon: <Sparkles size={20} /> },
  { title: "EFFORTLESS CARE", desc: "Stay cleaner for longer with advanced hydrophobic surface technologies.", icon: <Zap size={20} /> },
  { title: "VALUE PRESERVATION", desc: "Maintain a flawless factory finish to maximize your car's resale value.", icon: <TrendingUp size={20} /> },
];

const HowHelp: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white font-black text-4xl mb-6 font-brand uppercase tracking-widest leading-tight">
          THE WRAPSTERS ADVANTAGE
        </h2>
        <p className="text-gray-500 text-[12px] font-black max-w-3xl mx-auto mb-24 leading-relaxed uppercase tracking-[0.3em] opacity-80">
          WE ELEVATE AUTOMOTIVE STANDARDS THROUGH PRECISION PROTECTION
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-[#0f0f0f] p-12 border border-white/5 rounded-xl hover:border-[#ffb703]/30 transition-premium flex flex-col items-center group shadow-xl">
              <div className="mb-8 text-[#ffb703] group-hover:scale-110 transition-premium">
                {b.icon}
              </div>
              <h4 className="text-white font-black text-[12px] uppercase tracking-[0.2em] mb-4 group-hover:text-[#ffb703] transition-premium">{b.title}</h4>
              <p className="text-gray-600 text-[10px] font-bold leading-relaxed uppercase tracking-widest">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowHelp;