import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { AnimatedText } from '../AnimatedText';
import { ProjectItem } from './ProjectItem';

const data = [
  {
    href: 'https://project-untitled-crm.vercel.app/',
    category: 'development',
    img: '/assets/projects/thumb-1.png',
    title: 'UntitledCRM',
  },
  {
    href: 'https://www.figma.com/proto/0c9RVZ7ENMPhWlGObBq3Vm/Mobile-App-%E2%80%A2-Finance-Manager?page-id=1115%3A3358&node-id=1115-3439&viewport=-1118%2C-8540%2C0.6&scaling=min-zoom&starting-point-node-id=1115%3A3365',
    category: 'dizajn',
    img: '/assets/projects/thumb-2.png',
    title: 'Finance Manager',
  },
  {
    href: 'https://mateoniksic.pythonanywhere.com/',
    category: 'development',
    img: '/assets/projects/thumb-3.png',
    title: 'StoryShare',
  },
  {
    href: '#',
    category: 'dizajn',
    img: '/assets/projects/thumb-4.png',
    title: 'Cvjećarna Flora',
  },
  {
    href: 'https://atauctus.hr/',
    category: 'dizajn',
    img: '/assets/projects/thumb-5.png',
    title: 'Atauctus',
  },
  {
    href: 'https://zorahouse.com/',
    category: 'development',
    img: '/assets/projects/thumb-6.png',
    title: 'Zora House',
  },
];

export const Projects = () => {
  const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));

  const tabData = [{ category: 'all' }, ...uniqueCategories.map((category) => ({ category }))];

  const [tabValue, setTabValue] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6);

  const filterWork = tabValue === 'all' ? data.filter((item) => item.category !== 'all') : data.filter((item) => item.category === tabValue);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section
      className='py-24 min-h-[1000px]'
      id='projects'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='all'
          className='w-full flex flex-col'
        >
          <div className='flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]'>
            <AnimatedText
              text='Moji projekti'
              textStyles='h2 mb-[30px] xl:mb-0'
            />
            {/* render tab triggers */}
            <TabsList className='max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0'>
              {tabData.map((item, idx) => {
                return (
                  <TabsTrigger
                    key={idx}
                    value={item.category}
                    className='capitalize w-[120px]'
                    onClick={() => setTabValue(item.category)}
                  >
                    {item.category === 'all' ? 'sve' : item.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {/* render content for the selected tab */}
          <TabsContent
            value={tabValue}
            className='w-full'
          >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[30px]'>
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {visibleItems < filterWork.length && (
              <div className='flex justify-center mt-12'>
                <button
                  onClick={loadMoreItems}
                  className='btn btn-accent'
                >
                  Učitaj više
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
