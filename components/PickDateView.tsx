import React from 'react';
import { MdOutlineDateRange, MdEmail, MdPeople } from "react-icons/md";
import InputWithLabel from './InputWithLabel';

const PickDateView: React.FC = () => {
    return (
        <div className='flex justify-center items-center  p-6 backdrop-blur-md bg-black/30 rounded-xl shadow-lg max-w-4xl my-10'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-6 w-full'> {/* Menggunakan grid untuk layout responsif */}
                <InputWithLabel
                    id="email-input"
                    label="Email"
                    type="email"
                    icon={MdEmail} // Menggunakan ikon email
                    placeholder="Masukkan email Anda"
                />
                <InputWithLabel
                    id="check-in-date"
                    label="Check-in"
                    type="date"
                    icon={MdOutlineDateRange}
                />
                <InputWithLabel
                    id="check-out-date"
                    label="Check-out"
                    type="date"
                    icon={MdOutlineDateRange}
                />
                <InputWithLabel
                    id="guest-count"
                    label="Tamu"
                    type="number"
                    icon={MdPeople} // Menggunakan ikon orang
                    placeholder="Jumlah tamu"
                    style='md:w-32'
                />
                <button
                    className='
            mt-4 md:mt-0 
            bg-blue-600 hover:bg-blue-700 
            text-white font-semibold 
            py-2 px-6 
            rounded-full 
            shadow-md hover:shadow-lg 
            transition duration-300 ease-in-out
            w-full md:w-auto md:min-w-[100px] {/* Sesuaikan lebar minimum */}
            col-span-1 md:col-start-5 md:self-center
          '
                >
                    Cari
                </button>
            </div>
        </div>
    );
};

export default PickDateView;