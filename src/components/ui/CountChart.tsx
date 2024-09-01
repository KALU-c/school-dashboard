"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white"
  },
  {
    name: 'Boys',
    count: 37,
    fill: '#FAE27C',
  },
  {
    name: 'Girls',
    count: 63,
    fill: '#C3EBFA',
  },
];

const CountChart = () => {
  return (
    <div className='w-full h-full bg-white rounded-xl p-4'>
      {/* title */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src="/moreDark.png" alt='more' width={20} height={20} />
      </div>
      {/* chart */}
      <div className='w-full h-[75%] relative'>
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt='' height={50} width={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      </div>
      {/* bottom */}
      <div className='flex justify-center gap-16'>
        <div>
          <div className='h-5 w-5 rounded-full bg-kalSky' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-400'>Boys (55%)</h2>
        </div>
        <div>
          <div className='h-5 w-5 rounded-full bg-kalYellow' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-400'>Girls (45%)</h2>
        </div>
      </div>
    </div>
  )
}

//50
export default CountChart