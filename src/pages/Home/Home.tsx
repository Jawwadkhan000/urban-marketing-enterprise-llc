import React, { useEffect } from 'react';
import { Hero } from '../../sections/Hero/Hero';
import { BrandMarquee } from '../../sections/BrandMarquee/BrandMarquee';
import { WhoWeAre } from '../../sections/WhoWeAre/WhoWeAre';
import { WhatWeDo } from '../../sections/WhatWeDo/WhatWeDo';
import { SelectedWork } from '../../sections/SelectedWork/SelectedWork';
import { ClientWords } from '../../sections/ClientWords/ClientWords';
import { FinalCTA } from '../../sections/FinalCTA/FinalCTA';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Urban Marketing Enterprise LLC (UME) | We Make Brands Own the City";
  }, []);

  return (
    <main className="home-page">
      <Hero />
      <BrandMarquee />
      <WhoWeAre />
      <WhatWeDo />
      <SelectedWork />
      <ClientWords />
      <FinalCTA />
    </main>
  );
};
