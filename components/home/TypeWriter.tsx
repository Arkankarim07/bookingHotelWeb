'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
const TypeWriter = () => {
    return (
        <Typewriter
            options={
                {
                    strings: [
                        `Book your next <span class="text-yellow-400">Vacation</span> with us!`,
                        `Discover breathtaking destinations and create unforgettable memories.`,
                        `Let us help you plan your dream <span class="text-yellow-400">Vacation</span>.`
                    ],
                    autoStart: true,
                    loop: true,

                    wrapperClassName: "text-4xl md:text-6xl font-bold mt-4"


                }
            }
        />
    )
}

export default TypeWriter
