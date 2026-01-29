import React from 'react';

const blogPosts = [
  {
    title: "HOW TO PROTECT MATTE AND SATIN FINISHES IN DUBAI WITHOUT LOSING THE LOOK",
    date: "JANUARY 20, 2026",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "ELITE AUTOMOTIVE TRANSFORMATION: THE ART OF BESPOKE CAR WRAPPING",
    date: "DECEMBER 29, 2025",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "THE SCIENCE BEHIND SELF-HEALING PPF: HOW IT WORKS AND WHY YOU NEED IT",
    date: "DECEMBER 19, 2025",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=800"
  }
];

const Guides: React.FC = () => {
  return (
    <section className="bg-black py-32 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#ffb703] text-center font-brand text-6xl mb-24 uppercase tracking-[0.2em] leading-tight">
          CAR WRAPPING!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {blogPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="w-full aspect-[4/3] overflow-hidden mb-10 border border-white/10 bg-[#111] rounded-sm relative shadow-2xl">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="text-white font-black text-[13px] leading-relaxed mb-6 transition-colors group-hover:text-[#ffb703] text-center max-w-[320px] tracking-wide uppercase">
                {post.title}
              </h4>
              <div className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em] mt-auto">
                {post.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guides;