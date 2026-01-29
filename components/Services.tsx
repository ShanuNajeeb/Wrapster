import React from 'react';
import { ChevronRight } from 'lucide-react';

const wrapstersServices = [
  {
    tag: "PROTECTION",
    title: "Paint Protection Film (PPF)",
    desc: "Invisible armor for long-lasting shine and total body protection from scratches and debris.",
    label: "Dubai's Finest",
    detail: "Self-Healing",
    img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600"
  },
  {
    tag: "STYLING",
    title: "Wrapping & Transforming",
    desc: "Complete color changes and bespoke vinyl designs to redefine your vehicle's personality.",
    label: "Custom Fit",
    detail: "Global Brands",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
    bestSeller: true
  },
  {
    tag: "COATING",
    title: "Ceramic Coating",
    desc: "Nano-ceramic technology providing deep gloss and hydrophobic properties to your paintwork.",
    label: "Nano-Tech",
    detail: "Long-Term",
    img: "https://images.unsplash.com/photo-1597839219216-a773cb2473e4?auto=format&fit=crop&q=80&w=600"
  },
  {
    tag: "DETAILING",
    title: "Detailing & Cleaning",
    desc: "Meticulous interior and exterior detailing that brings back the factory-fresh look.",
    label: "Deep Clean",
    detail: "Expert Craft",
    img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600"
  },
  {
    tag: "STYLING",
    title: "Car Tinting & Restoration",
    desc: "High-quality window films and light restoration to enhance comfort and aesthetics.",
    label: "Precision",
    detail: "Heat Control",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=600"
  }
];

const Services: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-[1440px] mx-auto text-center">
        <div className="flex items-center justify-center gap-4 text-[#ffb703] mb-8">
           <span className="h-px w-10 bg-[#ffb703]"></span>
           <span className="text-[11px] font-black uppercase tracking-[0.5em]">Our Signature Selection</span>
           <span className="h-px w-10 bg-[#ffb703]"></span>
        </div>
        <h2 className="text-black font-black text-5xl mb-10 uppercase font-brand tracking-[0.1em]">Premium Auto Care Solutions</h2>
        <p className="text-gray-500 max-w-4xl mx-auto mb-24 text-[14px] font-bold leading-loose uppercase tracking-widest">
          Experience the pinnacle of automotive care in Dubai. Our signature protection services are engineered to preserve your vehicle's value while enhancing its aesthetic appeal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24">
          {wrapstersServices.map((pkg, idx) => (
            <div key={idx} className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative text-left rounded-sm overflow-hidden transform hover:-translate-y-2">
              {pkg.bestSeller && (
                <div className="absolute top-4 left-4 bg-black text-white text-[9px] font-black py-2 px-5 rounded-full z-10 shadow-lg flex items-center gap-2 tracking-widest">
                  <i className="fa-solid fa-bolt text-[#ffb703]"></i> MOST WANTED
                </div>
              )}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white">
                <div className="text-[#ffb703] text-[10px] font-black uppercase tracking-[0.25em] mb-3">{pkg.tag}</div>
                <h4 className="text-black font-black text-sm leading-tight mb-5 line-clamp-2 uppercase h-10 tracking-wider">{pkg.title}</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-8 flex-grow line-clamp-3 font-bold uppercase tracking-widest opacity-80">{pkg.desc}</p>
                <div className="border-t border-gray-100 pt-6 mt-auto flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-black font-black text-[11px] uppercase tracking-widest">{pkg.label}</span>
                      <span className="text-gray-400 text-[9px] font-black uppercase tracking-[0.2em] mt-1">{pkg.detail}</span>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#ffb703] group-hover:text-black transition-all duration-300">
                      <ChevronRight size={18} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-black text-white px-16 py-6 rounded-sm text-[12px] font-black uppercase tracking-[0.3em] transition-all hover:bg-[#ffb703] hover:text-black shadow-2xl shadow-black/20">
          View Full Service Menu
        </button>
      </div>
    </section>
  );
};

export default Services;