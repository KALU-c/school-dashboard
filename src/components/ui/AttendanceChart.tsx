"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 50,
    absent: 50,
  },
  {
    name: 'Wed',
    present: 70,
    absent: 30,
  },
  {
    name: 'Thu',
    present: 80,
    absent: 20,
  },
  {
    name: 'Fri',
    present: 60,
    absent: 40,
  },
  {
    name: 'Sat',
    present: 90,
    absent: 10,
  },
  {
    name: 'Sun',
    present: 50,
    absent: 50,
  },
];

const AttendanceChart = () => {
  return (
    <div className='w-full h-full bg-white rounded-xl p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image
          src="/moreDark.png"
          alt='more'
          width={20}
          height={20}
          className='cursor-pointer'
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: "#d1d5db"}}/>
          <YAxis axisLine={false} tickLine={false} tick={{fill: "#d1d5db"}}/>
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray", paddingBlock: "0" }}
           />
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
          <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]}/>
          <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default AttendanceChart