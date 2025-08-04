
import TypeWriter from "@/components/home/TypeWriter";
import Navbar from "@/components/Navbar";
import PickDateView from "@/components/PickDateView";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <>
      <div className="h-[80dvh] relative bg-[url('../assets/img/background.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        <Navbar />
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

      <div className="h-[60dvh] flex flex-col md:flex-row items-center justify-between pt-24 px-6 md:px-40 gap-10 text-white">
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

      <div className="pt-24 bg-gray-200  flex  justify-between px-24 items-center w-full ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm "
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div>
                    <div className="flex bg-white aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">dawdaw</h1>

      </div>

    </>
  );
}
