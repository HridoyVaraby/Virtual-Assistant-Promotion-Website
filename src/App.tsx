import React from 'react';
import { Header } from './components/Header';
import { Benefits } from './components/Benefits';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ExitPopup } from './components/ExitPopup';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Benefits />
      <FAQ />
      <CTASection />
      <Footer />
      <ExitPopup />
    </div>
  );
}

export default App;