import React from 'react';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';

export function Header() {
  return (
    <header>
      <Navigation />
      <HeroSection />
    </header>
  );
}