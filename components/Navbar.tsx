'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [navBg, setNavBg] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    const changeNavBg = () => {
        if (window.scrollY >= 200) {
            setNavBg(true);
        } else {
            setNavBg(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg)
        return () => {
            window.removeEventListener('scroll', changeNavBg)
        }
    }, [])
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${navBg ? 'bg-white shadow-md' : 'bg-transparent md:bg-transparent md:shadow-none'}
        `}>

            <div className='flex justify-between items-center py-4 px-6 md:px-20'>
                {/* Logo */}
                <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>VacationFun</h1>

                {/* Desktop Menu */}
                <div className='hidden md:flex gap-6 font-bold'>
                    <Link href='/' className='text-gray-700 hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Home
                    </Link>
                    <Link href='/hotels' className='text-gray-700 hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Hotels
                    </Link>
                    <Link href='/packages' className='text-gray-700 hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Packages
                    </Link>
                    <Link href='/contact' className='text-gray-700 hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Contact
                    </Link>
                </div>

                {/* Desktop Login Button */}
                <button className='hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200'>
                    Login
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className='md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1'
                >
                    <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className='flex flex-col py-4'>
                    <Link
                        href='/'
                        className='px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors duration-200 font-medium'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href='/hotels'
                        className='px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors duration-200 font-medium'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Hotels
                    </Link>
                    <Link
                        href='/packages'
                        className='px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors duration-200 font-medium'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Packages
                    </Link>
                    <Link
                        href='/contact'
                        className='px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors duration-200 font-medium'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <div className='px-6 py-3'>
                        <button className='w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors duration-200'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar