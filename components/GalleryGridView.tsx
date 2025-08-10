import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const GalleryGridView = () => {
    const [flip, setFlip] = useState(false)
    const controls = useAnimation()
    useEffect(() => {
        const interval = setInterval(() => {
            setFlip(!flip)
            controls.start({
                rotateY: flip ? 0 : 180,
                transition: { duration: 0.8, ease: 'easeInOut' },
            })
        }, 2000 * 3)

        return () => clearInterval(interval)
    }, [flip, controls])
    return (
        <div className="grid grid-cols-2 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((item) => (
                <motion.div
                    animate={controls}
                    key={item}
                    className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                    <Image
                        src="/assets/img/background.jpg"
                        alt={`Gallery item ${item}`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />

                </motion.div>
            ))}
        </div>
    )
}

export default GalleryGridView
