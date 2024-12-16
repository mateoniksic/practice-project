'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { RotatingShape } from './RotatingShape';
import { Header } from './Header';
import { Stats } from './Stats/Stats';

export const Hero = () => {
  return (
    <section
      className='h-[800px] relative bg-accent/10 xl:bg-white'
      id='home'
    >
      {/* header */}
      <Header />
      <div className='container mx-auto h-full'>
        <div className='relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10'>
          <h1 className='h1 mb-2 max-w-[320px] xl:max-w-none'>
            <span className='text-accent'>Tražite razvoj i</span> dizajn{' '}
            <TypeAnimation
              preRenderFirstString={true}
              sequence={['Web stranica?', 2000, 'Web shopova?', 2000, 'Web aplikacija?', 2000]}
              speed={50}
              repeat={Infinity}
              wrapper='span'
              cursor={false}
            ></TypeAnimation>
          </h1>
          <p className='lead max-w-[476px] mb-7'>Izrada modernih i funkcionalnih web stranica koje spajaju vrhunski dizajn i odlične performanse.</p>
          <ScrollLink
            to='contact'
            smooth
          >
            <button className='btn btn-accent mb-8'>Kontaktirajte me</button>
          </ScrollLink>
          <Stats />
        </div>

        <div className='hidden xl:flex w-[42vw] h-[800px] absolute top-0 right-0 bg-accent-lighter'>
          <div className='absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]'>
            <Image
              src='/assets/hero/dev.png'
              alt='Developer'
              fill
              quality='100'
              priority
              className='object-contain'
            />
          </div>

          {/* arrow shape */}
          <div
            className='hidden xl:flex absolute top-48 left-[4vw]'
            data-scroll
            data-scroll-speed='0.05'
          >
            <Image
              src='/assets/hero/arrow.svg'
              alt='shape'
              width={160}
              height={160}
            ></Image>
          </div>

          {/* shape 1 */}
          <div
            className='absolute top-[600px] left-[3vw]'
            data-scroll
            data-scroll-speed='0.2'
          >
            <RotatingShape
              content={
                <Image
                  src='/assets/hero/shape-1.svg'
                  alt='shape'
                  width={38}
                  height={38}
                ></Image>
              }
              direction='left'
              duration={6}
            />
          </div>

          {/* shape 2 */}
          <div
            className='absolute top-[240px] left-[30vw]'
            data-scroll
            data-scroll-speed='0.1'
          >
            <RotatingShape
              content={
                <Image
                  src='/assets/hero/shape-2.svg'
                  alt='shape'
                  width={34}
                  height={34}
                ></Image>
              }
              direction='left'
              duration={4}
            />
          </div>

          {/* shape 3 */}
          <div
            className='absolute top-[480px] left-[36vw]'
            data-scroll
            data-scroll-speed='0.08'
          >
            <RotatingShape
              content={
                <Image
                  src='/assets/hero/shape-3.svg'
                  alt='shape'
                  width={36}
                  height={36}
                ></Image>
              }
              direction='left'
              duration={8}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
