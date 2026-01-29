import React from 'react';
import { Globe, Phone, Mail, Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] shadow-2xl">
      {/* Top Banner Bar - Matches Screenshot */}
      <div className="bg-[#ffb703] text-black py-2 px-8 flex justify-between items-center text-[11px] font-black uppercase tracking-widest border-b border-black/5">
        <div className="flex gap-10">
          <a href="tel:+971501535251" className="flex items-center gap-2 hover:opacity-75 transition-all duration-300">
            <Phone size={12} fill="currentColor" /> +971 50 153 5251
          </a>
          <a href="mailto:support@wrapsters.ae" className="flex items-center gap-2 hover:opacity-75 transition-all duration-300 lowercase font-semibold tracking-normal">
            <Mail size={12} fill="currentColor" /> support@wrapsters.ae
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Star size={12} fill="currentColor" />
          <span className="italic">DUBAI'S #1 CAR PROTECTION</span>
        </div>
      </div>

      {/* Main Nav - Matches Screenshot Styling */}
      <nav className="bg-white py-3 px-8 flex justify-between items-center relative">
        <div className="flex items-center">
          <div className="flex items-center">
            {/* Logo Block */}
            <div className="bg-black text-[#ffb703] px-4 py-1.5 italic font-black text-3xl font-brand">WRAPSTERS</div>
            {/* Secondary Logo Text */}
            <div className="flex flex-col leading-[1.1] border-l-2 border-black ml-4 pl-4 font-black text-[10px] tracking-[0.2em] text-black">
              <span>AE.</span>
              <span>BESPOKE.</span>
              <span>AUTO.</span>
            </div>
          </div>
        </div>

        {/* Navigation Links - Centered like screenshot */}
        <div className="hidden lg:flex items-center gap-10 text-black font-black text-[11px] uppercase tracking-widest">
          <a href="#" className="text-[#ffb703]">HOME</a>
          <a href="#" className="hover:text-[#ffb703] transition-colors">COMPANY</a>
          <a href="#" className="hover:text-[#ffb703] transition-colors">SERVICES</a>
          <a href="#" className="hover:text-[#ffb703] transition-colors">GALLERY</a>
          <a href="#" className="hover:text-[#ffb703] transition-colors">TESTIMONIALS</a>
          <a href="#" className="hover:text-[#ffb703] transition-colors">BLOGS</a>
          <a href="#" className="hover:text-[#ffb703] transition-colors">CONTACT</a>
        </div>

        <div className="flex items-center gap-6 text-black">
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#ffb703] transition-all text-[11px] font-black uppercase tracking-widest">
            <Globe size={18} />
            <span>UAE</span>
          </div>
          <button className="bg-black text-white px-8 py-3.5 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-[#ffb703] hover:text-black transition-all shadow-lg">
            BOOK APPOINTMENT
          </button>
        </div>
      </nav>
      {/* Decorative Yellow Under-Bar */}
      <div className="h-[6px] bg-[#ffb703] w-full"></div>
    </header>
  );
};

export default Header;