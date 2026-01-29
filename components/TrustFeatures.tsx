import React from 'react';
import { ShieldCheck, Zap, Heart, Award } from 'lucide-react';

const TrustFeatures: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white font-black text-4xl mb-6 uppercase font-brand tracking-widest">Premium Car Care Services You Can Trust</h2>
        <p className="text-gray-400 max-w-4xl mx-auto mb-20 text-[13px] font-bold uppercase tracking-widest leading-loose opacity-90">
          Wrapsters has been providing premium car care solutions with our team of dedicated professionals. Our experienced technicians are committed to maintaining the beauty and longevity of your vehicle with our comprehensive protection and detailing services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 text-left max-w-4xl mx-auto mb-20">
          <div className="flex gap-6 group items-start">
             <div className="shrink-0 text-[#ffb703] group-hover:scale-110 transition-transform mt-1"><ShieldCheck size={28} strokeWidth={2.5} /></div>
             <div>
               <h4 className="text-[12px] font-black uppercase tracking-widest mb-2 group-hover:text-[#ffb703] transition-colors text-white">Premium Products</h4>
               <p className="text-[11px] text-gray-400 leading-relaxed font-bold uppercase tracking-widest opacity-80">We use only the highest quality cleaning products that are safe for your vehicle.</p>
             </div>
          </div>
          <div className="flex gap-6 group items-start">
             <div className="shrink-0 text-[#ffb703] group-hover:scale-110 transition-transform mt-1"><Zap size={28} strokeWidth={2.5} /></div>
             <div>
               <h4 className="text-[12px] font-black uppercase tracking-widest mb-2 group-hover:text-[#ffb703] transition-colors text-white">Attention to Detail</h4>
               <p className="text-[11px] text-gray-400 leading-relaxed font-bold uppercase tracking-widest opacity-80">Our professionals pay attention to every detail to ensure a perfect finish.</p>
             </div>
          </div>
          <div className="flex gap-6 group items-start">
             <div className="shrink-0 text-[#ffb703] group-hover:scale-110 transition-transform mt-1"><Heart size={28} strokeWidth={2.5} /></div>
             <div>
               <h4 className="text-[12px] font-black uppercase tracking-widest mb-2 group-hover:text-[#ffb703] transition-colors text-white">Fast Service</h4>
               <p className="text-[11px] text-gray-400 leading-relaxed font-bold uppercase tracking-widest opacity-80">We value your time and ensure efficient service without compromising quality.</p>
             </div>
          </div>
          <div className="flex gap-6 group items-start">
             <div className="shrink-0 text-[#ffb703] group-hover:scale-110 transition-transform mt-1"><Award size={28} strokeWidth={2.5} /></div>
             <div>
               <h4 className="text-[12px] font-black uppercase tracking-widest mb-2 group-hover:text-[#ffb703] transition-colors text-white">Satisfaction Guaranteed</h4>
               <p className="text-[11px] text-gray-400 leading-relaxed font-bold uppercase tracking-widest opacity-80">If you're not completely satisfied, we'll make it right.</p>
             </div>
          </div>
        </div>

        <button className="bg-[#ffb703] text-black hover:bg-white px-12 py-4 rounded-sm text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-yellow-500/20">
          Learn More About Us
        </button>
      </div>
    </section>
  );
};

export default TrustFeatures;