'use client'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsPeople } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

const Page = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Navbar />

      <div className='min-h-screen w-full bg-gray-50 py-20 md:py-24'>
        <div className='flex md:flex-col lg:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-24 items-start lg:items-center  pb-4 gap-4 lg:gap-0'>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>Luxury Room</h1>
            <div className='flex items-center'>
              {Array(5).fill(0).map((_, index) => (
                <FaStar className='text-yellow-500' key={index} />
              ))}
              <span className='ml-2 text-xs sm:text-sm text-gray-600'>(4.8 • 124 ulasan)</span>
            </div>
          </div>
          <div className='text-left lg:text-right'>
            <div className='text-2xl md:text-3xl font-bold text-gray-900'>$195</div>
            <div className='text-gray-600'>per malam</div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 px-4 sm:px-8 md:px-12 lg:px-20 gap-8 lg:gap-0'>
          <div className='col-span-1 flex flex-col gap-4 lg:border-r border-gray-400 lg:pr-12'>
            <div className='w-full h-[250px] sm:h-[300px] md:h-[350px] relative'>
              <Image src='/assets/img/background.jpg' className='shadow-lg shadow-gray-500 rounded-lg' alt='room' fill />
            </div>
            <div className='grid  grid-cols-4 gap-2 md:gap-4'>
              {Array(4).fill(0).map((_, index) => (
                <div className='w-full h-[80px] sm:h-[100px] relative' key={index}>
                  <Image src='/assets/img/background.jpg' className='rounded-lg' alt='room' fill />
                </div>
              ))}
            </div>
          </div>

          <div className='col-span-1 lg:pl-12'>
            <h1 className='text-2xl md:text-3xl font-extrabold'>Description</h1>
            <p className='mt-4 opacity-50 text-sm md:text-base'>
              Nikmati pengalaman menginap yang tak terlupakan di suite mewah kami dengan pemandangan laut yang menakjubkan.
              Kamar seluas 45m² ini dilengkapi dengan balkon pribadi, tempat tidur king-size premium, dan fasilitas modern
              yang akan membuat Anda merasa seperti di rumah sendiri.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-2'>
              {Array(4).fill(0).map((_, index) => (
                <div key={index} className='flex items-center gap-2 opacity-75'>
                  <BsPeople />
                  <p className='text-sm md:text-base'>Maksimal 2 orang</p>
                </div>
              ))}
            </div>

            <div className='p-3 bg-white shadow-md rounded-lg mt-6'>
              <h1 className='text-base md:text-lg font-extrabold'>Fasilitas Kamar</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
                {Array(4).fill(0).map((_, index) => (
                  <div key={index} className='flex items-center justify-between bg-green-100 px-3 md:px-4 py-2 rounded-lg'>
                    <h4 className='text-sm md:text-base'>Wifi Gratis</h4>
                    <Check className='text-green-600' />
                  </div>
                ))}
              </div>
            </div>
            <Link href='/booking'>
              <Button className='mt-6 w-full p-4 md:p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-extrabold text-lg md:text-2xl'>
                Pesan Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className='min-h-screen bg-gray-50 px-4 sm:px-8 md:px-12 lg:px-20 py-8'>
        <div className='p-4 sm:p-6 bg-white shadow-md rounded-lg mx-auto'>
          <h1 className='text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6'>Ulasan</h1>

          {/* Multiple Reviews */}
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className='mb-6 last:mb-0 pb-6 last:pb-0 border-b last:border-b-0 border-gray-200'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                <div className='flex items-start sm:items-center gap-3'>
                  <div className='w-12 h-12 sm:w-[50px] sm:h-[50px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0'>
                    {['J', 'S', 'M'][index]}
                  </div>
                  <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-semibold text-sm sm:text-base'>
                      {['John Doe', 'Sarah Johnson', 'Michael Chen'][index]}
                    </h3>
                    <div className='flex items-center'>
                      {Array(5).fill(0).map((_, starIndex) => (
                        <FaStar className='text-yellow-500 text-sm' key={starIndex} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='opacity-75 text-sm sm:text-base flex-shrink-0 self-start sm:self-center'>
                  {['2 minggu lalu', '1 bulan lalu', '3 minggu lalu'][index]}
                </p>
              </div>

              {/* Review Text */}
              <div className='mt-4 ml-0 sm:ml-15'>
                <p className='text-gray-700 text-sm sm:text-base leading-relaxed'>
                  {[
                    'Hotel yang luar biasa! Kamar sangat bersih dan nyaman. Pemandangan dari balkon sangat menakjubkan.',
                    'Pengalaman yang sangat memuaskan. Lokasi strategis dan pelayanan yang ramah dari seluruh staff.',
                    'Fasilitas lengkap dan modern. Sarapan buffet sangat beragam. Pasti akan kembali lagi!'
                  ][index]}
                </p>
              </div>
            </div>
          ))}

          {/* Load More Button */}
          <div className='text-center mt-6'>
            <button className='px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base'>
              Lihat Semua Ulasan
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Page