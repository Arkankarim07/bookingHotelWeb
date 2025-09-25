/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Navbar from '@/components/Navbar'
import RatingSection from '@/components/room/RatingSection'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { BsPeople } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

const Page = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { id } = useParams()

  const fetchRoomByID = async () => {
    const response = await axios.get(`http://localhost:8080/room/get/${id}`)
    // console.log(response.data)
    return response.data.data
  }

  const { data: room, error, isLoading } = useQuery({
    queryKey: ['room'],
    queryFn: fetchRoomByID
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  const handlePay = async () => {
    try {
const userObject = localStorage.getItem('user')
const userId = userObject ? JSON.parse(userObject).ID : null
console.log("User ID:", userId)
      const payload = {
        room_id: Number(id), // ambil dari params
        user_id: userId, // sementara dummy, nanti bisa dari auth/login
        check_in: new Date().toISOString(), // dummy
        check_out: new Date(Date.now() + 86400000).toISOString(), // +1 hari
        quantity: 1,
        full_name: "John Doe",
        email: "johndoe@example.com",
        phone: "08123456789",
        adults: 2,
        children: 0,
        room_count: 1,
        room_type: "Deluxe"
      }

      const res = await axios.post("http://localhost:8080/create-snap", payload, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = res.data
      console.log("Snap Response:", data)

      const snapToken = data.data.token // ✅ token ada di sini
      window.snap.pay(snapToken, {
        onSuccess: (result: any) => {
          console.log("SUCCESS:", result)
        },
        onPending: (result: any) => {
          console.log("PENDING:", result)
        },
        onError: (result: any) => {
          console.error("ERROR:", result)
        },
        onClose: () => {
          alert("Kamu menutup popup tanpa bayar.")
        }
      })
    } catch (err) {
      console.error("Gagal ambil token:", err)
    }
  }
  return (
    <>
      <Navbar />

      <div className='min-h-screen w-full bg-gray-50 pt-20 md:pt-24'>
        <div className='flex md:flex-col lg:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-24 items-start lg:items-center  pb-4 gap-4 lg:gap-0'>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>{room.name}</h1>
            <div className='flex items-center'>
              {Array(5).fill(0).map((_, index) => (
                <FaStar className='text-yellow-500' key={index} />
              ))}
              <span className='ml-2 text-xs sm:text-sm text-gray-600'>(4.8 • 124 ulasan)</span>
            </div>
          </div>
          <div className='text-left lg:text-right'>
            <div className='text-2xl md:text-3xl font-bold text-gray-900'>Rp {room.price}</div>
            <div className='text-gray-600'>per malam</div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 px-4 sm:px-8 md:px-12 lg:px-20 gap-8 lg:gap-0'>
          <div className='col-span-1 flex flex-col gap-4 lg:border-r border-gray-400 lg:pr-12'>
            <div className='w-full h-[250px] sm:h-[300px] md:h-[350px] relative'>
              <Image priority={true} src='/assets/img/background.jpg' className='shadow-lg shadow-gray-500 rounded-lg' alt='room' fill sizes='( max-width: 768px ) 100vw, 50vw' />
            </div>
            <div className='grid  grid-cols-4 gap-2 md:gap-4'>
              {Array(4).fill(0).map((_, index) => (
                <div className='w-full h-[80px] sm:h-[100px] relative' key={index}>
                  <Image priority={true} src='/assets/img/background.jpg' className='rounded-lg' alt='room' fill sizes='( max-width: 768px ) 100vw, 50vw' />
                </div>
              ))}
            </div>
          </div>

          <div className='col-span-1 lg:pl-12'>
            <h1 className='text-2xl md:text-3xl font-extrabold'>Description</h1>
            <p className='mt-4 opacity-50 text-sm md:text-base'>
              {room.description}
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-2'>
              <div className='flex items-center gap-2 opacity-75'>
                <BsPeople />
                <p className='text-sm md:text-base'>Maksimal {room.max_guest} orang</p>
              </div>

            </div>

            <div className='p-3 bg-white shadow-md rounded-lg mt-6'>
              <h1 className='text-base md:text-lg font-extrabold'>Fasilitas Kamar</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
                {room?.facilities?.map((index: any) => (
                  <div key={index.ID} className='flex items-center justify-between bg-green-100 px-3 md:px-4 py-2 rounded-lg'>
                    <h4 className='text-sm md:text-base'>{index.name}</h4>
                    <Check className='text-green-600' />
                  </div>
                ))}
              </div>
            </div>
            <Button
              onClick={handlePay}
              className="mt-6 w-full p-4 md:p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-extrabold text-lg md:text-2xl"
            >
              Pesan Sekarang
            </Button>

            {/* <Link href='/booking'>
              <Button className='mt-6 w-full p-4 md:p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-extrabold text-lg md:text-2xl'>
                Pesan Sekarang
              </Button>
            </Link> */}
          </div>
        </div>
      </div>

      <RatingSection />


    </>
  )
}

export default Page