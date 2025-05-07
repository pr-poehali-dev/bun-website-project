
import React from 'react';
import BakeryHeader from '@/components/BakeryHeader';
import BakeryHero from '@/components/BakeryHero';
import BakeryCategories from '@/components/BakeryCategories';
import BakeryBestsellers from '@/components/BakeryBestsellers';
import BakeryFeatures from '@/components/BakeryFeatures';
import BakeryTestimonials from '@/components/BakeryTestimonials';
import BakeryFooter from '@/components/BakeryFooter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BakeryHeader />
      <main className="flex-grow">
        <BakeryHero />
        <BakeryCategories />
        <BakeryBestsellers />
        <BakeryFeatures />
        <BakeryTestimonials />
      </main>
      <BakeryFooter />
    </div>
  );
};

export default Index;
