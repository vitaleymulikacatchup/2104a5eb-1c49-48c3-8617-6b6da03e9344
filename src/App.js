import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CookieBanner from './components/CookieBanner';
import TrendingNow from './components/TrendingNow';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-netflix">
      <Header />
      <Hero />
      <CookieBanner />
      <TrendingNow />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;