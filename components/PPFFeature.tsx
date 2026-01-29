import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const PPFFeature: React.FC = () => {
  const [activeCar, setActiveCar] = useState('PORSCHE 911');
  const [activeCoverage, setActiveCoverage] = useState('FULL FRONT END');

  const cars = ['PORSCHE 911', 'TESLA MODEL 3', 'RANGE ROVER'];
  const coverages = [
    { name: 'FULL FRONT END', features: 'Hood, Fenders, Mirror Caps' },
    { name: 'FULL FRONT END & ROCKERS', features: 'Plus Side Skirts' },
    { name: 'FULL CAR', features: 'Total Exterior Protection' },
    { name: 'WINDOW TINT', features: 'Heat & UV Rejection' }
  ];

  return (
    <section className="bg-[#0a0a0a] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-[#ffb703] font-black text-4xl mb-4 font-brand uppercase tracking-widest">
            PAINT PROTECTION FILM (PPF) OPTIONS
          </h2>
          <p className="text-gray-400 font-bold text-[11px] uppercase tracking-[0.4em] opacity-80">
            Invisible Armor for Long-Lasting Shine
          </p>
        </div>

        <div className="bg-[#111] rounded-full inline-flex p-1.5 mb-24 border border-white/5 shadow-2xl">
          {cars.map(car => (
            <button
              key={car}
              onClick={() => setActiveCar(car)}
              className={`px-12 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-premium ${
                activeCar === car ? 'bg-[#ffb703] text-black shadow-xl shadow-yellow-500/20' : 'text-gray-500 hover:text-white'
              }`}
            >
              {car}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          <div className="w-full lg:w-2/5 flex flex-col gap-4 text-left">
            {coverages.map(cov => (
              <button
                key={cov.name}
                onClick={() => setActiveCoverage(cov.name)}
                className={`flex flex-col px-8 py-6 rounded-xl border transition-premium group relative ${
                  activeCoverage === cov.name 
                    ? 'bg-[#ffb703] border-[#ffb703] text-black shadow-2xl' 
                    : 'bg-[#111] border-white/5 text-gray-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-[12px] font-black uppercase tracking-widest">{cov.name}</span>
                  <ArrowRight size={16} className={`transition-transform duration-500 ${activeCoverage === cov.name ? 'translate-x-1' : 'opacity-0'}`} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${activeCoverage === cov.name ? 'text-black/60' : 'text-gray-600'}`}>
                  {cov.features}
                </span>
              </button>
            ))}
            
            <div className="mt-8 p-6 bg-[#111] border border-white/5 rounded-xl">
               <ul className="space-y-3">
                 {['Self-healing properties', '10-Year Warranty', 'Maximum UV Protection'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                     <Check size={14} className="text-[#ffb703]" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="w-full lg:w-3/5 relative">
             <div className="relative group p-6 border border-white/5 rounded-[2rem] bg-gradient-to-br from-[#111] to-[#0a0a0a] shadow-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" 
                  alt="PPF Visualization" 
                  className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                />
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-[#ffb703] rounded-[2rem] opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-1000"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPFFeature;