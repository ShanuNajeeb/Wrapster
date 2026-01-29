import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ahmed Al-Rashid",
      role: "PORSCHE 911 GT3 OWNER",
      text: "Exceptional service! My car looks brand new after their full PPF wrap. The team at Wrapsters was professional, punctual, and paid attention to every detail. Absolute gold standard in Dubai.",
      avatar: "https://i.pravatar.cc/150?u=ahmed"
    },
    {
      name: "Fatima Hassan",
      role: "RANGE ROVER OWNER",
      text: "Wrapsters transformed my SUV completely! The color change wrap was outstanding - they removed every trace of the old color. Fast, reliable, and premium results. Truly bespoke.",
      avatar: "https://i.pravatar.cc/150?u=fatima"
    },
    {
      name: "Mohammed Khalil",
      role: "FERRARI 488 OWNER",
      text: "Best auto styling workshop I've encountered. Consistent quality, friendly staff, and they always finish on time. Highly recommend their ceramic coating for that deep mirror finish.",
      avatar: "https://i.pravatar.cc/150?u=mohammed"
    }
  ];

  return (
    <section className="bg-black py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-white font-black text-5xl mb-6 font-brand uppercase tracking-widest">DRIVEN BY SATISFACTION</h2>
          <p className="text-gray-500 text-[12px] font-black tracking-[0.3em] max-w-2xl mx-auto uppercase">
            HEAR FROM OUR ELITE CLIENTELE ABOUT THE WRAPSTERS EXPERIENCE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-28">
          {reviews.map((review, i) => (
            <div key={i} className="bg-[#0f0f0f] border border-white/5 p-12 rounded-xl hover:border-[#ffb703]/30 transition-premium group shadow-2xl">
              <div className="flex justify-between items-start mb-10">
                <div className="flex gap-1 text-[#ffb703]">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="#ffb703" />)}
                </div>
                <CheckCircle2 size={20} className="text-blue-500 fill-blue-500/10" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-12 font-medium italic opacity-80 group-hover:opacity-100 transition-opacity">
                "{review.text}"
              </p>
              <div className="flex items-center gap-5">
                <img src={review.avatar} className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-premium ring-2 ring-white/5" alt={review.name} />
                <div>
                  <div className="text-white text-[12px] font-black uppercase tracking-widest">{review.name}</div>
                  <div className="text-[#ffb703] text-[9px] font-black uppercase tracking-widest mt-1 opacity-80">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="bg-[#ffb703] p-16 rounded-2xl text-black flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto shadow-3xl transform hover:scale-[1.01] transition-premium">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
             <h3 className="text-4xl font-black font-brand uppercase tracking-wider mb-2 leading-none">JOIN OUR ELITE CIRCLE</h3>
             <p className="text-[11px] font-black uppercase tracking-[0.25em] opacity-90">Experience the bespoke difference today</p>
          </div>
          <div className="flex gap-12 xl:gap-20">
            {[
              { val: "5000+", label: "CARS STYLED" },
              { val: "4.9", label: "GOOGLE RATING" },
              { val: "99%", label: "TRUST SCORE" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black font-brand mb-1">{stat.val}</div>
                <div className="text-[9px] font-black uppercase tracking-widest opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;