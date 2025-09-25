/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Search, Filter, SlidersHorizontal, MapPin, Users, Bed, Wifi, Car, Coffee, Waves, Star, Heart } from 'lucide-react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

const Page = () => {
    const searchParams = useSearchParams();

    // Ambil query param dari URL
    const checkIn = searchParams.get("checkIn") || "";
    const checkOut = searchParams.get("checkOut") || "";
    const guest = searchParams.get("guest") || "";

    const [filters, setFilters] = useState({
        name: '',
        guest,
        checkIn,
        checkOut,
        cheapest: false,
        expensive: false,
        facility: [] as string[], // contoh: ["WiFi", "AC"]
    })
    const [debouncedName, setDebouncedName] = useState(filters.name);
    // debounce name 500ms
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedName(filters.name);
        }, 1000);

        return () => {
            clearTimeout(handler); // bersihin timer tiap kali user ngetik lagi
        };
    }, [filters.name]);

    const fetchFacilities = async () => {
        const res = await axios.get('http://localhost:8080/facility')
        return res.data.data // asumsi bentuknya [{ID:1, Name:"WiFi"}, ...]
    }
    const toggleFacility = (name: string) => {
        setFilters((prev) => ({
            ...prev,
            facility: prev.facility.includes(name)
                ? prev.facility.filter((f) => f !== name)
                : [...prev.facility, name],
        }))
    }

    const fetchData = async () => {
        const params = new URLSearchParams()
        if (filters.name) params.append('name', debouncedName)
        if (filters.guest) params.append('guest', filters.guest)
        if (filters.cheapest) params.append('cheapest', 'true')
        if (filters.expensive) params.append('expensive', 'true')
        if (filters.facility.length > 0) params.append('facility', filters.facility.join(','))

        const response = await axios.get(`http://localhost:8080/search?${params.toString()}`)
        return response.data.data
    }


    const { data: room, error, isLoading, refetch } = useQuery({
        queryKey: ['rooms', debouncedName, filters.guest, filters.checkIn, filters.checkOut, filters.cheapest, filters.expensive, filters.facility],
        queryFn: fetchData,
        // enabled: false
    })
    const { data: facilities, isLoading: fLoading } = useQuery({
        queryKey: ['facilities'],
        queryFn: fetchFacilities,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        refetch()
    }
    const facilityIcons = {
        wifi: Wifi,
        breakfast: Coffee,
        pool: Waves,
        parking: Car,
        gym: Users,
        ac: Bed,
    };

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <>
            <Navbar />

            <div className='min-h-screen bg-gray-50'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20'>
                    {/* Header & Results Info */}
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6'>
                        <div>
                            <h1 className='text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2'>Hasil Pencarian</h1>
                            <p className='text-gray-600 flex items-center gap-2'>
                                <MapPin size={16} />
                                Menampilkan 24 hotel di Bali • 15-20 Agustus 2024
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                        {/* Sidebar with Search + Filters */}
                        <div className='lg:col-span-1 space-y-6'>
                            {/* Search Section */}
                            <div className='bg-white rounded-xl p-6 shadow-sm border'>
                                <div className='flex items-center gap-2 mb-4'>
                                    <Search size={20} className='text-gray-600' />
                                    <h3 className='text-lg font-bold text-gray-900'>Pencarian</h3>
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    className='space-y-4'>
                                    {/* Location Search */}
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>Nama Room</label>
                                        <div className='relative'>
                                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={16} />
                                            <input
                                                type="text"
                                                value={filters.name}
                                                onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                                                placeholder="Cari hotel"
                                                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors'
                                            />
                                        </div>
                                    </div>

                                    {/* Date Inputs */}
                                    <div className='grid grid-cols-1 gap-3'>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>Check-in</label>
                                            <input type="date"
                                                value={filters.checkIn}
                                                onChange={(e) => setFilters({ ...filters, checkIn: e.target.value })}
                                                className='w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none' />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>Check-out</label>
                                            <input type="date"
                                                value={filters.checkOut}
                                                onChange={(e) => setFilters({ ...filters, checkOut: e.target.value })}
                                                className='w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none' />
                                        </div>
                                    </div>

                                    {/* Guests */}
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>Jumlah Tamu</label>
                                        <select
                                            value={filters.guest}
                                            onChange={(e) => setFilters({ ...filters, guest: e.target.value })}
                                            className='w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none'>
                                            <option>1 Tamu</option>
                                            <option>2 Tamu</option>
                                            <option>3 Tamu</option>
                                            <option>4+ Tamu</option>
                                        </select>
                                    </div>

                                    {/* Search Button */}
                                    <button type='submit' className='w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity'>
                                        Cari Hotel
                                    </button>
                                </form>
                            </div>

                            {/* Sort */}
                            <div className='bg-white rounded-xl p-6 shadow-sm border'>
                                <div className='flex items-center gap-2 mb-4'>
                                    <SlidersHorizontal size={20} className='text-gray-600' />
                                    <h3 className='text-lg font-bold text-gray-900'>Urutkan</h3>
                                </div>
                                <select
                                    onChange={(e) => {
                                        if (e.target.value === "price_asc") {
                                            setFilters({ ...filters, cheapest: true, expensive: false })
                                        } else if (e.target.value === "price_desc") {
                                            setFilters({ ...filters, cheapest: false, expensive: true })
                                        } else {
                                            setFilters({ ...filters, cheapest: false, expensive: false })
                                        }
                                    }}
                                    className='w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none'>
                                    <option value="recommended">Direkomendasikan</option>
                                    <option value="price_asc">Harga: Termurah</option>
                                    <option value="price_desc">Harga: Termahal</option>
                                    {/* <option value="rating">Rating Tertinggi</option> */}
                                </select>
                            </div>

                            {/* Facilities Filter */}
                            <div className='bg-white rounded-xl p-6 shadow-sm border'>
                                <div className='flex items-center gap-2 mb-4'>
                                    <Filter size={20} className='text-gray-600' />
                                    <h3 className='text-lg font-bold text-gray-900'>Fasilitas</h3>
                                </div>
                                <div className='space-y-3'>
                                    {fLoading ? (
                                        <p>Loading fasilitas...</p>
                                    ) : (
                                        facilities?.map((facility: any) => (
                                            <label key={facility.ID} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={filters.facility.includes(facility.name)}
                                                    onChange={() => toggleFacility(facility.name)}
                                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                />
                                                <span className="flex-1 text-gray-700 group-hover:text-gray-900 transition-colors">
                                                    {facility.name}
                                                </span>
                                            </label>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div className='bg-white rounded-xl p-6 shadow-sm border'>
                                <h3 className='text-lg font-bold text-gray-900 mb-4'>Rating</h3>
                                <div className='space-y-2'>
                                    {[5, 4, 3, 2].map((rating) => (
                                        <label key={rating} className='flex items-center gap-3 cursor-pointer'>
                                            <input type="checkbox" className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500' />
                                            <div className='flex items-center gap-1'>
                                                {[...Array(rating)].map((_, i) => (
                                                    <Star key={i} size={14} fill='currentColor' className='text-yellow-400' />
                                                ))}
                                                {[...Array(5 - rating)].map((_, i) => (
                                                    <Star key={i} size={14} className='text-gray-300' />
                                                ))}
                                            </div>
                                            <span className='text-gray-700'>& ke atas</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Results Grid */}
                        <div className='lg:col-span-3'>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {room?.map((room: any, index: any) => (
                                    <div key={index} className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={
                                                    room.room_images?.[0]?.image_url
                                                        ? `http://localhost:8080/${room.room_images[0].image_url}`
                                                        : "/assets/img/background.jpg"
                                                }
                                                alt="Room"
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />

                                            {/* Badges */}
                                            {/* <div className="absolute top-3 left-3 flex gap-2">
                                                {room.isPopular && (
                                                    <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                                                        POPULER
                                                    </span>
                                                )}
                                                {room.discount && (
                                                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                                        -{room.discount}%
                                                    </span>
                                                )}
                                            </div> */}

                                            {/* Heart Icon */}
                                            <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                                                <Heart size={16} className="text-gray-600" />
                                            </button>

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {room.name}
                                                </h3>
                                                <div className="flex items-center gap-1">
                                                    <Star size={14} fill='currentColor' className='text-yellow-400' />
                                                    <span className="text-sm font-semibold text-gray-700">{room.rating}</span>
                                                </div>
                                            </div>

                                            {/* Room Details */}
                                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Bed size={14} />
                                                    <span>{room.name}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users size={14} />
                                                    <span>{room.max_guest}</span>
                                                </div>
                                            </div>

                                            {/* Facilities */}
                                            <div className="flex items-center gap-2 mb-4">
                                                {room.facilities?.slice(0, 3).map((facility: any, idx: number) => {
                                                    const key = facility.Name?.toLowerCase(); // "WiFi" -> "wifi"
                                                    const Icon = facilityIcons[key];
                                                    return Icon ? (
                                                        <div key={idx} className="p-1.5 bg-gray-100 rounded-lg">
                                                            <Icon size={12} className="text-gray-600" />
                                                        </div>
                                                    ) : null;
                                                })}
                                                {room.facilities.length > 3 && (
                                                    <span className="text-xs text-gray-500 ml-1">
                                                        +{room.facilities.length - 3} lainnya
                                                    </span>
                                                )}
                                            </div>

                                            {/* Reviews */}
                                            {/* <p className="text-xs text-gray-500 mb-3">
                                                {room.reviews} ulasan
                                            </p> */}

                                            {/* Price */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    {/* {room.originalPrice && (
                                                        <span className="text-sm text-gray-400 line-through">
                                                            ${room.originalPrice}
                                                        </span>
                                                    )} */}
                                                    <span className="text-xl font-bold text-blue-600">
                                                        ${room.price}
                                                    </span>
                                                    <span className="text-sm text-gray-600">/ malam</span>
                                                </div>
                                                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
                                                    Lihat
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More */}
                            <div className="text-center mt-8">
                                <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
                                    Muat Lebih Banyak Hotel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page