import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PPFFeature from './components/PPFFeature';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Guides from './components/Guides';
import HowHelp from './components/HowHelp';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <Services />
        <PPFFeature />
        <WhyChoose />
        <Testimonials />
        <Guides />
        <HowHelp />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;