import Navbar from "@/components/Navbar";
import PickDateView from "@/components/PickDateView";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="flex flex-col  items-start justify-center h-screen pt-16 px-16 ">
          <div className="flex flex-col items-center justify-center   p-6  ">
            <h1 className="text-4xl font-bold drop-shadow-lg ">Welcome to VacationFun</h1>
            <p className="text-lg ">Your dream vacation starts here</p>
          </div>
          <PickDateView />
        </div>
      </div>
    </>
  );
}
