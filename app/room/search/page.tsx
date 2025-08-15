import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { Search, Filter, SlidersHorizontal, MapPin, Users, Bed, Wifi, Car, Coffee, Waves, Star, Heart } from 'lucide-react'

const Page = () => {
    const rooms = [
        { 
            img: "/assets/img/background.jpg", 
            price: 120, 
            originalPrice: 150,
            name: "King Room", 
            beds: "1 King Bed", 
            capacity: "2 Guests",
            rating: 4.8,
            reviews: 124,
            facilities: ['wifi', 'breakfast', 'parking'],
            discount: 20,
            isPopular: true
        },
        { 
            img: "/assets/img/background.jpg", 
            price: 95, 
            originalPrice: null,
            name: "Queen Room", 
            beds: "1 Queen Bed", 
            capacity: "2 Guests",
            rating: 4.6,
            reviews: 89,
            facilities: ['wifi', 'gym'],
            discount: null,
            isPopular: false
        },
        { 
            img: "/assets/img/background.jpg", 
            price: 150, 
            originalPrice: 180,
            name: "Family Suite", 
            beds: "2 Queen Beds", 
            capacity: "4 Guests",
            rating: 4.9,
            reviews: 156,
            facilities: ['wifi', 'breakfast', 'pool', 'parking'],
            discount: 17,
            isPopular: true
        },
        { 
            img: "/assets/img/background.jpg", 
            price: 80, 
            originalPrice: null,
            name: "Single Room", 
            beds: "1 Single Bed", 
            capacity: "1 Guest",
            rating: 4.4,
            reviews: 67,
            facilities: ['wifi'],
            discount: null,
            isPopular: false
        },
    ];

    const facilityIcons = {
        wifi: Wifi,
        breakfast: Coffee,
        pool: Waves,
        parking: Car,
        gym: Users
    };

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
                                <div className='space-y-4'>
                                    {/* Location Search */}
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>Lokasi</label>
                                        <div className='relative'>
                                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={16} />
                                            <input 
                                                type="text" 
                                                placeholder="Cari hotel atau lokasi..."
                                                className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors'
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Date Inputs */}
                                    <div className='grid grid-cols-1 gap-3'>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>Check-in</label>
                                            <input type="date" className='w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none' />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>Check-out</label>
                                            <input type="date" className='w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none' />
                                        </div>
                                    </div>
                                    
                                    {/* Guests */}
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>Jumlah Tamu</label>
                                        <select className='w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none'>
                                            <option>1 Tamu</option>
                                            <option>2 Tamu</option>
                                            <option>3 Tamu</option>
                                            <option>4+ Tamu</option>
                                        </select>
                                    </div>
                                    
                                    {/* Search Button */}
                                    <button className='w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity'>
                                        Cari Hotel
                                    </button>
                                </div>
                            </div>

                            {/* Sort */}
                            <div className='bg-white rounded-xl p-6 shadow-sm border'>
                                <div className='flex items-center gap-2 mb-4'>
                                    <SlidersHorizontal size={20} className='text-gray-600' />
                                    <h3 className='text-lg font-bold text-gray-900'>Urutkan</h3>
                                </div>
                                <select className='w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none'>
                                    <option value="recommended">Direkomendasikan</option>
                                    <option value="price_asc">Harga: Termurah</option>
                                    <option value="price_desc">Harga: Termahal</option>
                                    <option value="rating">Rating Tertinggi</option>
                                </select>
                            </div>

                            {/* Facilities Filter */}
                            <div className='bg-white rounded-xl p-6 shadow-sm border'>
                                <div className='flex items-center gap-2 mb-4'>
                                    <Filter size={20} className='text-gray-600' />
                                    <h3 className='text-lg font-bold text-gray-900'>Fasilitas</h3>
                                </div>
                                <div className='space-y-3'>
                                    {[
                                        { label: 'Wi-Fi Gratis', icon: Wifi, count: 18 },
                                        { label: 'Sarapan', icon: Coffee, count: 12 },
                                        { label: 'Kolam Renang', icon: Waves, count: 8 },
                                        { label: 'Parkir Gratis', icon: Car, count: 15 },
                                        { label: 'Gym/Fitness', icon: Users, count: 6 },
                                    ].map((facility, index) => (
                                        <label key={index} className='flex items-center gap-3 cursor-pointer group'>
                                            <input type="checkbox" className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500' />
                                            <facility.icon size={16} className='text-gray-600 group-hover:text-blue-600 transition-colors' />
                                            <span className='flex-1 text-gray-700 group-hover:text-gray-900 transition-colors'>{facility.label}</span>
                                            <span className='text-sm text-gray-500'>({facility.count})</span>
                                        </label>
                                    ))}
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
                                                {[...Array(5-rating)].map((_, i) => (
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
                                {rooms.map((room, index) => (
                                    <div key={index} className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={room.img}
                                                alt={room.name}
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            
                                            {/* Badges */}
                                            <div className="absolute top-3 left-3 flex gap-2">
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
                                            </div>

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
                                                    <span>{room.beds}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users size={14} />
                                                    <span>{room.capacity}</span>
                                                </div>
                                            </div>

                                            {/* Facilities */}
                                            <div className="flex items-center gap-2 mb-4">
                                                {room.facilities.slice(0, 3).map((facility, idx) => {
                                                    const Icon = facilityIcons[facility];
                                                    return (
                                                        <div key={idx} className="p-1.5 bg-gray-100 rounded-lg">
                                                            <Icon size={12} className="text-gray-600" />
                                                        </div>
                                                    );
                                                })}
                                                {room.facilities.length > 3 && (
                                                    <span className="text-xs text-gray-500 ml-1">
                                                        +{room.facilities.length - 3} lainnya
                                                    </span>
                                                )}
                                            </div>

                                            {/* Reviews */}
                                            <p className="text-xs text-gray-500 mb-3">
                                                {room.reviews} ulasan
                                            </p>

                                            {/* Price */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    {room.originalPrice && (
                                                        <span className="text-sm text-gray-400 line-through">
                                                            ${room.originalPrice}
                                                        </span>
                                                    )}
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