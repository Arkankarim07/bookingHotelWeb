'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalLogin, setIsModalLogin] = useState(false)
    const [navBg, setNavBg] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const toggleLogin = () => {
        setIsModalLogin(!isModalLogin)
    }

    const handleLogin = () => {
        console.log("Email:", email)
        console.log("Password:", password)
        // TODO: proses login
    }

    const handleGoogleLogin = () => {
        console.log("Login dengan Google")
        // TODO: proses login Google
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
    ${pathname === '/'
                ? navBg
                    ? 'bg-white shadow-md' // kalau di '/' dan udah scroll 200px
                    : 'bg-transparent'     // kalau di '/' dan belum scroll
                : 'bg-white shadow-md'   // kalau di halaman lain, langsung putih
            }
  `}>

            {isModalLogin && (
                <div className='fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50'>
                    <div className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 overflow-hidden">
                        {/* Header */}
                        <div className="px-6 pt-6 pb-4 text-center border-b border-gray-100">
                            <h2 className="text-2xl font-bold">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Login
                                </span>
                            </h2>
                            <p className="text-gray-600 text-sm mt-1">Masuk ke akun Anda</p>
                        </div>

                        {/* Form */}
                        <div className="p-6 space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="masukkan email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="masukkan password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <button
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                                onClick={handleLogin}
                            >
                                Login
                            </button>

                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">atau</span>
                                </div>
                            </div>

                            <button
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                onClick={handleGoogleLogin}
                            >
                                <FcGoogle size={20} />
                                Login dengan Google
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="px-6 pb-6 text-center text-sm text-gray-600">
                            Belum punya akun?
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium ml-1">Daftar</a>
                        </div>

                        {/* Close button */}
                        <button
                            onClick={() => setIsModalLogin(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <div className='flex justify-between items-center py-4 px-6 md:px-20'>
                {/* Logo */}
                <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>VacationFun</h1>

                {/* Desktop Menu */}
                <div className={`hidden md:flex gap-6 font-bold ${pathname === '/' ? navBg ? 'text-black' : 'text-white' : 'text-black'}  `}>
                    <Link href='/' className=' hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Home
                    </Link>
                    <Link href='/hotels' className=' hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Hotels
                    </Link>
                    <Link href='/packages' className=' hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Packages
                    </Link>
                    <Link href='/contact' className=' hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Contact
                    </Link>
                </div>

                {/* Desktop Login Button */}
                <button onClick={toggleLogin} className='hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200'>
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
                        href='/room'
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
                        <button onClick={toggleLogin} className='w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors duration-200'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar