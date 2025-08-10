import React from 'react'
import {
    Marquee,
    MarqueeContent,
    // MarqueeFade,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
const MarqueeView = () => {
    return (
        <div className="pb-20 w-[110%] origin-top-left">
            <Marquee className="bg-purple-600 flex items-center min-h-[70px]">
                <MarqueeContent className="scrollbar-hide flex items-center justify-center h-full">
                    <MarqueeItem>
                        <h1 className="text-4xl md:text-6xl font-bold text-white whitespace-nowrap">
                            VACATIONFUN
                        </h1>
                    </MarqueeItem>
                </MarqueeContent>
            </Marquee>
        </div>
    )
}

export default MarqueeView
