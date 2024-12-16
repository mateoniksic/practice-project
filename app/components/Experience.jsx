import React from 'react';
import { AnimatedText } from './AnimatedText';
import { Cards } from './Cards/Cards';

export const Experience = () => {
  return (
    <section
      id='experience'
      className='pt-12 pb-24'
    >
      <div className='container mx-auto'>
        <AnimatedText
          text='Obrazovanje, iskustvo i tehnologije'
          textStyles='h2 mb-[30px] text-center'
        />
        <Cards />
      </div>
    </section>
  );
};
