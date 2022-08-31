import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Movie } from '../typings'
import Thumnail from './Thumnail'

interface Props {
    title: string
    movies: Movie[] 
  }

function Row({ title, movies }: Props) {
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
        <h1>{title}</h1>
        <div className='group relative md:ml-2'>
           <ChevronLeftIcon className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9
            cursor-pointer opacity-0 transition hover:scale-175 group-hover:opacity-100' />

          <div className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2'>
             <Thumnail />
             <Thumnail />
             <Thumnail />
          </div>
            
           <ChevronRightIcon className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9
            cursor-pointer opacity-0 transition hover:scale-175 group-hover:opacity-100'  />
        </div>
    </div>
  )
}

export default Row