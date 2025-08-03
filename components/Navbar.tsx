import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between  items-center py-6 px-20 fixed top-0 left-0 right-0 z-50'>
            <h1 className='text-2xl font-bold  '>VacationFun</h1>
            <div className='flex gap-4  font-bold'>
                <Link href='/' className=' after:content-[""] after:block after:w-1/2  after:h-[4px] after:bg-blue-500 after:rounded-full'>
                    Home
                </Link>
                <Link href='/about'>Hotels</Link>
                <Link href='/contact'>Packages</Link>
                <Link href='/contact'>Contact</Link>
            </div>
            <button className='bg-black text-white px-6 py-2 rounded-full'>Login</button>
        </div>
    )
}

export default Navbar
