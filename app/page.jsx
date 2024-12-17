'use client';

import { useEffect } from 'react';

import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact';
import { FixedMenu } from './components/FixedMenu';
import { Footer } from './components/Footer';

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <main className='overflow-hidden'>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
