import React from 'react'
import Image from 'next/image'
import { GlobeIcon } from '@radix-ui/react-icons'

interface PlaceComponent {
    image: string;
    location: string;
    title: string;
    date: string;
    description: string;
    key: number;
}

const PlaceComponent = (props: PlaceComponent) => {
  return (
    <div className='flex flex-row items-center max-w-xl mx-auto gap-4 rounded-lg p-4'>
        <div className='h-[230px] w-[600px]'>
            <Image 
                className='rounded-lg object-cover w-full h-full'
                src={props.image}
                alt="Travel Journal"
                width={200}
                height={250}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
        <div>
            <div>
                <div className='flex flex-row gap-2 mb-2 items-center'>
                    <GlobeIcon />
                    <p className=''>{props.location}</p>
                </div>
                <div className='mb-2'>
                    <p className='text-3xl font-bold mb-6'>{props.title}</p>
                    <p className='text-sm font-bold'>{props.date}</p>
                </div>
                <p>{props.description}</p>
                </div>
        </div>
    </div>

  )
}

export default PlaceComponent