import CountUp from 'react-countup';

export const StatsItem = ({ endCountNum, endCountText, text }) => {
  return (
    <div className='flex xl:flex-1 flex-col items-center justify-center text-center bg-gray-50 p-2 rounded-sm'>
      <div className='font-primary text-primary text-3xl xl:text-4xl leading-none'>
        <CountUp
          end={endCountNum}
          delay={1}
          duration={4}
        />
        <span>{endCountText}</span>
      </div>
      <p className='text-sm'>{text}</p>
    </div>
  );
};
