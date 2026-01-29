import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/971501535251" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-all flex items-center justify-center group"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap text-[10px] font-black uppercase tracking-widest">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;