import React from 'react'

const AboutSection = () => {
    return (
        <div className="h-[60dvh] flex flex-col md:flex-row items-center justify-between  px-6 md:px-40 gap-10 text-white">
            {/* Kiri: Judul */}
            <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    About Us
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4 rounded-full"></div>
            </div>

            {/* Kanan: Deskripsi */}
            <div className="md:w-1/2">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    We are a passionate team dedicated to helping you explore the world through unique and unforgettable travel experiences.
                    Our mission is to connect people with breathtaking destinations, rich cultures, and meaningful adventures.
                </p>
                <p className="mt-6 italic text-gray-400">
                    "Travel not to escape life, but for life not to escape you."
                </p>
            </div>
        </div>
    )
}

export default AboutSection
