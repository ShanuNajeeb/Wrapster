import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-32 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-28">
        {/* Brand Info */}
        <div className="flex flex-col items-start">
          <div className="font-brand text-4xl tracking-tighter italic uppercase text-white mb-8 flex items-center gap-2">
            <div className="bg-[#ffb703] text-black px-3 py-1 rounded italic font-black text-3xl">WRAPSTERS</div>
            <div className="flex flex-col leading-none border-l border-white/20 pl-4 ml-2">
              <span className="text-[9px] font-black tracking-[0.3em] text-white/60">AE. BESPOKE.</span>
            </div>
          </div>
          <p className="text-gray-500 text-[11px] leading-relaxed mb-10 font-bold uppercase tracking-widest">
            The leading destination for Bespoke Auto Protection and Luxury Car Wrapping in the UAE. Crafting excellence for the world's most elite vehicles.
          </p>
          <div className="flex gap-6">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ffb703] hover:border-[#ffb703] transition-premium transform hover:-translate-y-1">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 pb-3 border-b border-[#ffb703] inline-block">NAVIGATE</h4>
          <ul className="space-y-4 text-gray-500 text-[11px] font-black uppercase tracking-[0.2em]">
            <li><a href="#" className="hover:text-white transition-premium">HOME</a></li>
            <li><a href="#" className="hover:text-white transition-premium">OUR COMPANY</a></li>
            <li><a href="#" className="hover:text-white transition-premium">SERVICES</a></li>
            <li><a href="#" className="hover:text-white transition-premium">GALLERY</a></li>
            <li><a href="#" className="hover:text-white transition-premium">BLOGS</a></li>
          </ul>
        </div>

        {/* Protection Services */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 pb-3 border-b border-[#ffb703] inline-block">SOLUTIONS</h4>
          <ul className="space-y-4 text-gray-500 text-[11px] font-black uppercase tracking-[0.2em]">
            <li><a href="#" className="hover:text-white transition-premium text-white/80">PPF PROTECTION</a></li>
            <li><a href="#" className="hover:text-white transition-premium">VINYL WRAPPING</a></li>
            <li><a href="#" className="hover:text-white transition-premium">CERAMIC COAT</a></li>
            <li><a href="#" className="hover:text-white transition-premium text-white/80">WHEEL ARMOR</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 pb-3 border-b border-[#ffb703] inline-block">LOCATION</h4>
          <ul className="space-y-7 text-gray-400 text-[11px] font-bold tracking-widest">
            <li className="flex gap-4">
              <MapPin size={20} className="text-[#ffb703] shrink-0" />
              <span className="uppercase leading-relaxed">Warehouse 63, ABA Avenue,<br />Al Quoz 2, Dubai UAE</span>
            </li>
            <li className="flex gap-4 items-center">
              <Phone size={18} className="text-[#ffb703] shrink-0" />
              <span className="font-black text-white">+971 50 153 5251</span>
            </li>
            <li className="flex gap-4 items-center">
              <Mail size={18} className="text-[#ffb703] shrink-0" />
              <span className="lowercase tracking-normal font-medium text-white/80">support@wrapsters.ae</span>
            </li>
            <li className="flex gap-4">
              <Clock size={18} className="text-[#ffb703] shrink-0" />
              <div className="text-[10px] uppercase font-black">
                <p>MON-SAT: 09:00 - 19:00</p>
                <p className="text-[#ffb703] mt-1">SUN: BY APPOINTMENT</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-gray-600">
           <span className="hover:text-[#ffb703] transition-premium cursor-default">CREDIT CARD</span>
           <span className="hover:text-[#ffb703] transition-premium cursor-default">CRYPTO PAY</span>
           <span className="hover:text-[#ffb703] transition-premium cursor-default">SSL SECURE</span>
        </div>
        
        <div className="text-[10px] text-gray-600 font-black uppercase tracking-widest text-center">
          © 2026 WRAPSTERS.AE • SUBSIDIARY OF SSH GROUP
        </div>

        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-gray-600">
          <a href="#" className="hover:text-white transition-premium">PRIVACY</a>
          <a href="#" className="hover:text-white transition-premium">TERMS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;