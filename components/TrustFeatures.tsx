import React from 'react';
import { ShieldCheck, Zap, Heart, Award } from 'lucide-react';

const TrustFeatures: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 border-b border-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-black font-black text-4xl mb-6 uppercase font-brand tracking-widest">Premium Car Care Services You Can Trust</h2>
        <p className="text-gray-500 max-w-4xl mx-auto mb-20 text-[13px] font-medium leading-relaxed">
          GO7 Services has been providing premium car care solutions with our team of dedicated professionals. Our experienced technicians are committed to maintaining the beauty and longevity of your vehicle with our comprehensive washing and detailing services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 text-left max-w-4xl mx-auto mb-20">
          <div className="flex gap-4 group">
             <div className="shrink-0 text-[#ffb703] group-hover:scale-110 transition-transform"><ShieldCheck size={20} strokeWidth={3} /></div>
             <div>
               <h4 className="text-[11px] font-black uppercase tracking-widest mb-1 group-hover:text-[#ffb703] transition-colors">Premium Products</h4>
               <p className="text-[10px] text-gray-400 leading-relaxed font-bold">We use only the highest quality cleaning products that are safe for your vehicle.</p>
             </div>
          </div>
          <div className="flex gap-4 group">
             <div className="shrink-0 text-[#ffb703] group-hover:scale-110 transition-transform"><Zap size={20} strokeWidth={3} /></div>
             <div>
               <h4 className="text-[11px] font-black uppercase tracking-widest mb-1 group-hover:text-[#ffb703] transition-colors">Attention to Detail</h4>
               <p className="text-[10px] text-gray-400 leading-relaxed font-bold">Our professionals pay attention to every detail to ensure a perfect finish.</p>
             </div>
          </div>
          <div className="flex gap-4 group">
             <div className="shrink-0 text-[#ffb703] group-hover:scale-110 transition-transform"><Heart size={20} strokeWidth={3} /></div>
             <div>
               <h4 className="text-[11px] font-black uppercase tracking-widest mb-1 group-hover:text-[#ffb703] transition-colors">Fast Service</h4>
               <p className="text-[10px] text-gray-400 leading-relaxed font-bold">We value your time and ensure efficient service without compromising quality.</p>
             </div>
          </div>
          <div className="flex gap-4 group">
             <div className="shrink-0 text-[#ffb703] group-hover:scale-110 transition-transform"><Award size={20} strokeWidth={3} /></div>
             <div>
               <h4 className="text-[11px] font-black uppercase tracking-widest mb-1 group-hover:text-[#ffb703] transition-colors">Satisfaction Guaranteed</h4>
               <p className="text-[10px] text-gray-400 leading-relaxed font-bold">If you're not completely satisfied, we'll make it right.</p>
             </div>
          </div>
        </div>

        <button className="bg-[#ffb703] text-black hover:bg-black hover:text-white px-12 py-4 rounded-sm text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-yellow-500/10">
          Learn More About Us
        </button>
      </div>
    </section>
  );
};

export default TrustFeatures;