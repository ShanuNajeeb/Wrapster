import React from 'react';
import { ShoppingBag, Truck, Globe, RotateCcw } from 'lucide-react';

const Perfumes: React.FC = () => {
  return (
    <section className="bg-[#fffcf5] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-left">
          <div className="inline-flex items-center gap-2 mb-6">
            <i className="fa-solid fa-spray-can-sparkles text-[#ffb703]"></i>
            <span className="text-[#ffb703] text-[10px] font-black uppercase tracking-widest">Premium Collection</span>
          </div>
          <h2 className="text-black font-black text-5xl md:text-6xl mb-2 font-brand uppercase tracking-tight leading-none">Elevate Your Drive with</h2>
          <h2 className="text-[#ffb703] font-black text-5xl md:text-6xl mb-8 font-brand uppercase tracking-tight leading-none">Luxury Car Perfumes</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg font-medium">
            Transform your driving experience with our exclusive collection of premium car perfumes. Each scent is carefully crafted to maintain the beauty and longevity of your vehicle with the perfect ambiance for every journey.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <button className="bg-[#e67e22] text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl hover:bg-black transition-all">
              Shop Collection <ShoppingBag size={14} />
            </button>
            <button className="border border-gray-200 text-gray-500 px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors">
              View All Scents
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-10">
             <div>
               <div className="text-5xl font-black text-black font-brand">4</div>
               <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Premium Scents</div>
             </div>
             <div>
               <div className="text-5xl font-black text-black font-brand">100%</div>
               <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Authentic</div>
             </div>
             <div>
               <div className="text-5xl font-black text-black font-brand">5<span className="text-xl">★</span></div>
               <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Rated</div>
             </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
           <div className="bg-[#ffb703] rounded-[2rem] p-4 relative overflow-hidden group shadow-2xl">
              <div className="aspect-square bg-white rounded-[1.8rem] overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800" 
                  alt="GO7 Luxury Car Perfumes" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between shadow-2xl border border-white/50">
                 <div>
                   <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1 flex items-center gap-1">
                     <i className="fa-solid fa-crown text-[#ffb703]"></i> GO7 Signature Collection
                   </div>
                   <div className="text-black font-black text-xl font-brand">4 PREMIUM FRAGRANCES</div>
                 </div>
                 <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#ffb703] shadow-lg">
                    <ShoppingBag size={20} />
                 </div>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 shadow-sm border border-gray-50 flex flex-col items-center text-center group hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 bg-[#ffb703]/10 rounded-full flex items-center justify-center text-[#ffb703] mb-4 group-hover:scale-110 transition-transform">
                    <Truck size={20} />
                 </div>
                 <h4 className="text-[11px] font-black uppercase mb-1">Free Shipping</h4>
                 <p className="text-[10px] text-gray-400 leading-tight font-medium">Complimentary free shipping UAE & KSA.</p>
                 <span className="text-[#ffb703] text-[9px] font-black mt-2 uppercase border border-[#ffb703]/20 px-2 py-0.5 rounded">Code: FREESHIP</span>
              </div>
              <div className="bg-white p-6 shadow-sm border border-gray-50 flex flex-col items-center text-center group hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 bg-[#ffb703]/10 rounded-full flex items-center justify-center text-[#ffb703] mb-4 group-hover:scale-110 transition-transform">
                    <Globe size={20} />
                 </div>
                 <h4 className="text-[11px] font-black uppercase mb-1">UAE & Global Shipping</h4>
                 <p className="text-[10px] text-gray-400 leading-tight font-medium">We deliver all over UAE in 2 days, and global in 3-5 days</p>
              </div>
              <div className="bg-white p-6 shadow-sm border border-gray-50 flex flex-col items-center text-center group hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 bg-[#ffb703]/10 rounded-full flex items-center justify-center text-[#ffb703] mb-4 group-hover:scale-110 transition-transform">
                    <RotateCcw size={20} />
                 </div>
                 <h4 className="text-[11px] font-black uppercase mb-1">Easy Returns</h4>
                 <p className="text-[10px] text-gray-400 leading-tight font-medium">7-day hassle-free return policy for your peace of mind</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Perfumes;