
'use client'
import Navbar from "@/components/Navbar";

import Image from "next/image";
import { motion } from "motion/react"
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MarqueeView from "@/components/MarqueeView";
import GalleryGridView from "@/components/GalleryGridView";
import FooterView from "@/components/FooterView";
import ContactUsView from "@/components/ContactUsView";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      <div className="z-50 fixed bottom-1.5 right-1.5">
        <div className="w-[50px] h-[50px] flex  items-center justify-center bg-purple-600 rounded-full">
          <RiCustomerService2Fill className="text-3xl  text-white " />
        </div>
      </div>
      {/* About Section */}
      <AboutSection />

      <div className=" bg-gradient-to-br relative from-gray-100 to-gray-300 w-full overflow-hidden">
        {/* Wave Header dengan animasi */}
        <div className="relative  overflow-hidden">
          <Image
            src="/wave.svg"
            alt="wave"
            width={1920}
            height={100}
            className="w-full h-full object-cover animate-wave"
          />
        </div>

        {/* Konten Utama */}
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Grid Gambar dengan efek hover */}
            <GalleryGridView />

            {/* Judul dengan animasi */}
            <div className="text-center lg:text-right">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Gallery Hotels
                </span>
              </h1>
              <p className="text-lg text-start md:text-xl text-gray-600 max-w-lg">
                Discover amazing Hotels and Beautiful Destinations from around the world.
              </p>
              <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="container overflow-hidden bg-white">
        <MarqueeView />
        <h1 className="text-md md:text-xl text-center">(Room Availability)</h1>
        <h1 className="text-3xl md:text-5xl text-center font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Explore Rooms
          </span>
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-24 mb-16">
          {[
            { img: "/assets/img/background.jpg", price: "$120 / night", name: "King Room", beds: "1 King Bed", capacity: "2 Guests" },
            { img: "/assets/img/background.jpg", price: "$95 / night", name: "Queen Room", beds: "1 Queen Bed", capacity: "2 Guests" },
            { img: "/assets/img/background.jpg", price: "$150 / night", name: "Family Suite", beds: "2 Queen Beds", capacity: "4 Guests" },
            { img: "/assets/img/background.jpg", price: "$80 / night", name: "Single Room", beds: "1 Single Bed", capacity: "1 Guest" },
          ].map((room, index) => (
            <div key={index} className="relative">
              {/* Image + Overlay */}
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={room.img}
                  alt={room.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500 brightness-75"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                {/* Price */}
                <span className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                  {room.price}
                </span>
              </div>

              {/* Room Info */}
              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
                <p className="text-sm text-gray-500">{room.beds} • {room.capacity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact Us Section */}
        <ContactUsView />
      </div>

      <FooterView />

    </>
  );
}
