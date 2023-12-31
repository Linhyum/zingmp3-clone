'use client'
import Loading from '@/components/Loading/Loading'
import useFollow from '@/hooks/useFollow'
import { Artist } from '@/types/artist.type'
import { formatNumberWithK } from '@/utils/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tooltip from '../Tooltip/Tooltip'

export default function ArtistList({ artistList }: { artistList: Artist[] }) {
   const { follows, handleClickFollow } = useFollow()
   if (!artistList) return <Loading />
   return (
      <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-5 md:gap-7'>
         {artistList.map((artist) => (
            <div key={artist.id} className='flex flex-col text-center'>
               <Link
                  href={artist?.link}
                  className='relative group aspect-square overflow-hidden rounded-full cursor-pointer'
               >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                     src={artist.thumbnail}
                     alt={artist.name}
                     className='w-full h-full object-cover transition-all duration-500 group-hover:scale-110'
                  />
                  <div className='absolute hidden group-hover:block inset-0 bg-black bg-opacity-40 z-10' />
                  <div className='absolute inset-0 hidden group-hover:flex items-center z-20 justify-center'>
                     <span className='border text-white border-white p-4 rounded-full'>
                        <svg
                           stroke='currentColor'
                           fill='currentColor'
                           strokeWidth={0}
                           viewBox='0 0 512 512'
                           height='20'
                           width='20'
                           xmlns='http://www.w3.org/2000/svg'
                           className='w-5 h-5'
                        >
                           <path d='M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z' />
                        </svg>
                     </span>
                  </div>
               </Link>
               <Link href={artist?.link} className='isHover cursor-pointer hover:underline font-medium mt-3 mb-1'>
                  {artist.name}
               </Link>
               <span className='text-secondary text-xs'>
                  {formatNumberWithK(artist.totalFollow as number)} quan tâm
               </span>
               <Tooltip content={follows.includes(artist.id) ? 'Bỏ quan tâm' : 'Quan tâm'}>
                  <button
                     onClick={() => handleClickFollow(artist.id, artist)}
                     className={`flex items-center gap-x-1 text-xs w-max text-white mx-auto mt-3 rounded-full px-3.5 ${
                        follows.includes(artist.id)
                           ? 'bg-white bg-opacity-10 hover:bg-opacity-20 py-1.5'
                           : 'bg-tprimary hover:bg-opacity-90 py-1'
                     }`}
                  >
                     {follows.includes(artist.id) ? (
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox='0 0 24 24'
                           strokeWidth={1.5}
                           stroke='currentColor'
                           className='w-4 h-4'
                        >
                           <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
                        </svg>
                     ) : (
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox='0 0 24 24'
                           strokeWidth={1.5}
                           stroke='currentColor'
                           className='w-[18px] h-[18px]'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
                           />
                        </svg>
                     )}
                     {follows.includes(artist.id) ? 'ĐÃ QUAN TÂM' : 'QUAN TÂM'}
                  </button>
               </Tooltip>
            </div>
         ))}
      </div>
   )
}
