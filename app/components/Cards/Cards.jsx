'use client';

import { Card } from './Card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

import { motion, AnimatePresence } from 'framer-motion';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';

const experience = [
  {
    type: 'experience',
    company: 'Atauctus',
    logoUrl: '/assets/experience/experience/logo-1.svg',
    position: 'UX/UI & Web Developer',
    duration: 'Studeni 2023 - Do sada',
    description: 'Suradnja s klijentima, izrada dizajna u Figmi, razvoj WordPress stranica, implementacija marketinških alata, osiguravanje kompatibilnosti preglednika i održavanje stranica.',
  },
  {
    type: 'education',
    institution: 'Fakultet informatike i digitalnih tehnologija',
    logoUrl: '/assets/experience/education/fidit.svg',
    qualification: 'Sveučilišni magistar informatike',
    duration: 'Studeni 2023 - Do sada',
    description: 'Fakultet informatike i digitalnih tehnologija znanstveno-nastavna je sastavnica Sveučilišta u Rijeci koja se bavi izobrazbom kadrova i znanstveno-istraživačkim radom u domeni informatike i digitalnih tehnologija.',
  },
  {
    type: 'education',
    institution: 'Fakultet informatike i digitalnih tehnologija',
    logoUrl: '/assets/experience/education/fidit.svg',
    qualification: 'Sveučilišni prvostupnik (baccalaureus) informatike',
    duration: 'Studeni 2021 - Studeni 2023',
    description: 'Fakultet informatike i digitalnih tehnologija znanstveno-nastavna je sastavnica Sveučilišta u Rijeci koja se bavi izobrazbom kadrova i znanstveno-istraživačkim radom u domeni informatike i digitalnih tehnologija.',
  },
  {
    type: 'skill',
    name: 'React.js',
    icon: <FaReact />,
    duration: '2023',
    description: 'Razvoj dinamičnih i interaktivnih korisničkih sučelja za bolje korisničko iskustvo.',
  },
  {
    type: 'skill',
    name: 'WordPress',
    icon: <FaWordpress />,
    duration: '2019',
    description: 'Razvoj web stranica i online trgovina korištenjem WordPress CMS sustava za brži razvoj i lakše upravljanje sadržajem.',
  },
  {
    type: 'skill',
    name: 'Figma',
    icon: <FaFigma />,
    duration: '2018',
    description: 'Dizajn korisničkog iskustva, sučelja i prototipa u Figmi.',
  },
];

export const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue='experience'
        className='w-full flex flex-col items-center'
      >
        <TabsList className='max-w-max mb-[30px]'>
          <TabsTrigger value='experience'>Radno iskustvo</TabsTrigger>
          <TabsTrigger value='education'>Obrazovanje</TabsTrigger>
          <TabsTrigger value='skill'>Vještine</TabsTrigger>
        </TabsList>
        <TabsContent
          value='experience'
          className='w-full'
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {experience
                .filter((item) => item.type === 'experience')
                .map((item, idx) => {
                  return (
                    <Card
                      key={idx}
                      {...item}
                    />
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent
          value='education'
          className='w-full'
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {experience
                .filter((item) => item.type === 'education')
                .map((item, idx) => {
                  return (
                    <Card
                      key={idx}
                      {...item}
                    />
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent
          value='skill'
          className='w-full'
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {experience
                .filter((item) => item.type === 'skill')
                .map((item, idx) => {
                  return (
                    <Card
                      key={idx}
                      {...item}
                    />
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};
