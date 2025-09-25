
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
import RoomSection from "@/components/home/RoomSection";

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


      <RoomSection />

      <FooterView />

    </>
  );
}
