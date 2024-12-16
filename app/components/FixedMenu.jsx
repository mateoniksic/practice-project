import { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { AnimatePresence, motion } from 'framer-motion';
import { LuMenu, LuMapPin, LuMail } from 'react-icons/lu';

import { Nav } from './Nav';
import { Socials } from './Socials';

export const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);
      };

      if (!isMobile) {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      } else {
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  if (!isMounted) return null;

  return (
    <div className='fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent'>
      <AnimatePresence>
        {showMenu && showMenuButton && (
          <motion.div className='relative w-full max-w-md md:max-w-none h-[400px] bottom-[28rem] xl:bottom-[16rem] px-4 pointer-events-auto'>
            <div className='bg-white w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px32 flex items-center gap-12'>
              <Nav
                containerStyles='md:border-r border-secondary/20 md:pr-12 w-full md:w-[200px] text-center md:text-left'
                listStyles='flex flex-col justify-center gap-4'
                linkStyles='font-primary text-4xl text-primary cursor-pointer hover:text-accent-hover'
              />
              <div className='hidden md:flex mx-auto'>
                <div className='mx-auto flex flex-col items-center'>
                  <div className='flex gap-12 mb-12'>
                    <div className='flex flex-col items-center'>
                      <div className='text-[28px] text-accent mb-2'>
                        <LuMapPin />
                      </div>
                      <p className='font-semibold text-primary text-lg'>Lokacija</p>
                      <p>Rijeka, Hrvatska</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='text-[28px] text-accent mb-2'>
                        <LuMail />
                      </div>
                      <p className='font-semibold text-primary text-lg'>Mail</p>
                      <p>mateo.niksic@uniri.hr</p>
                    </div>
                  </div>
                  <Socials
                    containerStyles='flex gap-2'
                    iconStyles='text-[28px] hover:text-accent-hover w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full '
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* menu button */}
      {/* render button without animations on mobile */}
      {isMobile ? (
        <div className='fixed z-50 bottom-16 pointer-events-auto'>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className='bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none'
          >
            <LuMenu className='text-4xl text-white' />
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className='fixed z-50 bottom-16 pointer-events-auto'
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className='bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none'
              >
                <LuMenu className='text-4xl text-white' />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
