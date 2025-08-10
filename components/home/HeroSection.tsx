import React from 'react'
import TypeWriter from "@/components/home/TypeWriter";
import PickDateView from "@/components/PickDateView";

const HeroSection = () => {
    return (
        <div className="h-[80dvh] relative bg-[url('/assets/img/background.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
            <div className="flex flex-col h-screen pt-24 md:pt-40  px-6 md:px-16">
                {/* Konten di atas */}
                <div className="text-center text-white mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Welcome to {" "}
                        <span className=" bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl mt-2">
                            VacationFun
                        </span>
                        <TypeWriter />
                    </h1>
                </div>

                {/* Konten di tengah */}
                <div className="flex flex-1 items-center relative justify-center">
                    <PickDateView />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
