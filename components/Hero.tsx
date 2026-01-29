import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1614200171366-4158773a6a2a?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Car Wrapping" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/95 to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-sm">
           <i className="fa-solid fa-crown text-[#ffb703] text-xs"></i>
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ffb703]">Bespoke Auto Protection & Styling</span>
        </div>

        <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tight font-brand mb-8 leading-[0.9] drop-shadow-2xl">
          Auto Protection & <br />
          <span className="text-[#ffb703]">Car Wrapping in Dubai</span>
        </h1>
        
        <p className="text-gray-300 text-base md:text-lg font-medium max-w-4xl mx-auto mb-16 leading-relaxed opacity-90">
          Welcome to <span className="text-white font-bold">Wrapsters</span> – we don’t just work on cars; we craft masterpieces. 
          As a family-owned business in the heart of Dubai, UAE, we’re passionate about enhancing and protecting the beauty of your vehicle. 
          Redefining automotive care with elite expertise.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-28">
          <button className="w-full sm:w-auto bg-[#ffb703] text-black px-14 py-5 rounded-sm font-black uppercase text-[12px] tracking-widest hover:bg-white transition-premium shadow-2xl shadow-yellow-500/20">
            Our Premium Services
          </button>
          <button className="w-full sm:w-auto text-white px-14 py-5 rounded-sm font-black uppercase text-[12px] tracking-widest flex items-center justify-center gap-3 hover:text-[#ffb703] transition-premium border border-white/20 backdrop-blur-sm">
            View Gallery <i className="fa-solid fa-chevron-right text-[10px]"></i>
          </button>
        </div>

        <div className="relative inline-block">
           <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-10 bg-[#ffb703]/50"></div>
           <h3 className="text-white font-black text-3xl md:text-4xl font-brand uppercase italic tracking-[0.25em] opacity-80">
            Where Every Car Tells a Story!
           </h3>
           <div className="h-[3px] w-24 bg-[#ffb703] mx-auto mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;