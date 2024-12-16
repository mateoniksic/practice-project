import { StatsItem } from './StatsItem';

const statsData = [
  {
    endCountNum: 2,
    endCountText: '+',
    text: 'god. iskustva',
  },
  {
    endCountNum: 10,
    endCountText: '+',
    text: 'projekata',
  },
  {
    endCountNum: 100,
    endCountText: '%',
    text: 'preporuka',
  },
];

export const Stats = () => {
  return (
    <div className='flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4'>
      {statsData.map((item, idx) => {
        return (
          <StatsItem
            key={idx}
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
          />
        );
      })}
    </div>
  );
};
