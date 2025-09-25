/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import ContactUsView from '../ContactUsView'
import Image from 'next/image'
import MarqueeView from '../MarqueeView'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

const RoomSection = () => {
    




    const fetchData = async () => {
        const response = await axios.get('http://localhost:8080/room/get')
        return response.data
    }

    const { data: rooms, error, isLoading } = useQuery({
        queryKey: ['rooms'],
        queryFn: fetchData
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="container overflow-hidden bg-white">
            <MarqueeView />
            <h1 className="text-md md:text-xl text-center">(Room Availability)</h1>
            <h1 className="text-3xl md:text-5xl text-center font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                    Explore Rooms
                </span>
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-24 mb-16">
                {rooms?.data?.map((room: any) => (
                    <Link href={`/room/${room.ID}`} key={room.ID} className="relative">
                        {/* Image + Overlay */}
                        <div className="relative w-full h-64 hover:shadow-lg shadow-purple-600 transition overflow-hidden rounded-lg">
                            <Image
                                src={`http://localhost:8080/${room.room_images[0].image_url}` || '/assets/img/background.jpg'}
                                alt={room.name}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500 brightness-75"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                            {/* Price */}
                            <span className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                                ${room.price} / night
                            </span>
                        </div>

                        {/* Room Info */}
                        <div className="mt-3 flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
                            <p className="text-sm text-gray-500">
                                {room.max_guest} Guests
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Enhanced Contact Us Section */}
            <ContactUsView />
        </div>
    )
}

export default RoomSection
