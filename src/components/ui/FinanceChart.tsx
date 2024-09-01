"use client"

import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Jan',
    expense: 4000,
    income: 2400,
  },
  {
    name: 'Feb',
    expense: 3000,
    income: 1398,
  },
  {
    name: 'Mar',
    expense: 2000,
    income: 3800,
  },
  {
    name: 'Apr',
    expense: 2780,
    income: 3908,
  },
  {
    name: 'May',
    expense: 1890,
    income: 4800,
  },
  {
    name: 'Jun',
    expense: 2390,
    income: 3800,
  },
  {
    name: 'Jul',
    expense: 3490,
    income: 4300,
  },
  {
    name: 'Aug',
    expense: 4490,
    income: 2300,
  },
  {
    name: 'Sep',
    expense: 3890,
    income: 2190,
  },
  {
    name: 'Nov',
    expense: 2490,
    income: 1300,
  },
  {
    name: 'Dec',
    expense: 2490,
    income: 3300,
  },
  {
    name: 'Page G',
    expense: 2990,
    income: 2100,
  }
];

const FinanceChart = () => {
  return (
    <div className='w-full h-full bg-white rounded-xl p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Finance</h1>
        <Image src="/moreDark.png" height={20} width={20} alt='more' className='cursor-pointer' />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#d1d5db" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#d1d5db" }} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={4} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
export default FinanceChart