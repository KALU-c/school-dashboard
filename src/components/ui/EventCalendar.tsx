"use client"

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary Data

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white rounded-md p-4'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex justify-between items-center my-4'>
        <h1 className='font-semibold text-xl'>Events</h1>
        <Image src="/moreDark.png" width={20} height={20} alt='more' className='cursor-pointer' />
      </div>
      <div className='flex flex-col gap-4'>
        {events.map(event => (
          <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-kalSky even:border-t-kalPurple' key={event.id}>
            <div className='flex justify-between items-center'>
              <h1 className='font-semibold text-lg text-gray-600'>{event.title}</h1>
              <span className='text-xs text-gray-400'>{event.time}</span>
            </div>
            <p className='text-gray-500 text-sm mt-2'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default EventCalendar