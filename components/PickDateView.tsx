'use client'
import React, { FormEvent, useState } from 'react';
import { MdOutlineDateRange, MdPeople } from "react-icons/md";
import InputWithLabel from './InputWithLabel';
import { useRouter } from 'next/navigation';

const PickDateView: React.FC = () => {
    const router = useRouter();
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guest, setGuest] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (checkIn) params.append("checkIn", checkIn);
        if (checkOut) params.append("checkOut", checkOut);
        if (guest) params.append("guest", guest);

        // Redirect ke halaman search dengan query
        router.push(`/room/search?${params.toString()}`);
    }
    return (
        <div className='flex justify-end items-center  md:absolute md:bottom-20  p-6 bg-white rounded-xl shadow-xl max-w-4xl'>
            <form
                onSubmit={handleSubmit}
                className='grid grid-cols-1 md:grid-cols-4 gap-6 w-full'> {/* Menggunakan grid untuk layout responsif */}

                <InputWithLabel
                    id="check-in-date"
                    label="Check-in"
                    type="date"
                    icon={MdOutlineDateRange}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                />
                <InputWithLabel
                    id="check-out-date"
                    label="Check-out"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    icon={MdOutlineDateRange}
                />
                <InputWithLabel
                    id="guest-count"
                    label="Tamu"
                    type="number"
                    icon={MdPeople} // Menggunakan ikon orang
                    placeholder="Jumlah tamu"
                    value={guest}
                    onChange={(e) => setGuest(e.target.value)}
                    style='md:w-32'
                />
                <button
                    type='submit'
                    className='
            mt-4 md:mt-0 
            bg-blue-600 hover:bg-blue-700 
            text-white font-semibold 
            py-2 px-6 
            rounded-full 
            shadow-md hover:shadow-lg 
            transition duration-300 ease-in-out
            w-full md:w-auto md:min-w-[100px] {/* Sesuaikan lebar minimum */}
            col-span-1 md:col-start-4 md:self-center
          '
                >
                    Cari
                </button>
            </form>
        </div>
    );
};

export default PickDateView;