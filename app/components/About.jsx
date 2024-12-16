import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';

export const About = () => (
  <section
    className='relative pt-12 pb-24'
    id='about'
  >
    <div className='container mx-auto h-full'>
      <div className='h-full flex items-center justify-center'>
        <div className='hidden xl:flex flex-1 pl-8'>
          <div className='relative w-full max-w-[380px]'>
            {/* shape */}
            <div className='w-[160px] h-[160px] bg-accent mix-blend-multiply absolute -left-4 -top-5 -z-10'></div>
            {/* image */}
            <div className='rounded-tl-[8px] rounded-tr-[120px] w-full bg-accent-lighter min-4-[480px] flex items-end justify-center'>
              <Image
                src='/assets/about/img.png'
                width={350}
                height={478}
                quality={100}
                priority
                alt='developer'
              ></Image>
            </div>
            {/* rotating shape */}
            <div className='absolute top-2/4 -right-[65px] flex items-center justify-center'>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
              >
                <Image
                  src='/assets/about/shape-1.svg'
                  width={160}
                  height={160}
                  alt='shape'
                />
              </motion.div>
              <div className='absolute text-center text-white'>
                <div className='text-5xl font-bold leading-none'>2+</div>
                <div className='leading-none text-center'>
                  Godina
                  <br />
                  iskustva
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6'>
          <div>
            <AnimatedText
              text='Moje ime je Mateo Nikšić'
              textStyles='h2 mb-2'
            />
            <p className='text-lg'>UX/UI & Web developer</p>
          </div>
          <p className='max-w-[680px] mx-auto xl:mx-0 mb-2'>Razvijam prilagođena digitalna rješenja koja spajaju vrhunski dizajn i tehničke mogućnosti. Fokusiram se na stvaranje intuitivnih, vizualno privlačnih web stranica uz korištenje modernih tehnologija.</p>
          {/* info items */}
          <div className='flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center'>
            {/* info item */}
            <div className='max-w-max'>
              <div className='uppercase font-bold text-primary'>Godine</div>
              <p>27</p>
            </div>
            {/* info item */}
            <div className='max-w-max'>
              <div className='uppercase font-bold text-primary'>Lokacija</div>
              <p>Rijeka, Hrvatski</p>
            </div>
            {/* info item */}
            <div className='max-w-max'>
              <div className='uppercase font-bold text-primary'>Mail</div>
              <p>mateo.niksic@uniri.hr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
