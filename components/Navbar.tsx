'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ModalLogin from './modal/ModalLogin'
import ModalRegister from './modal/ModalRegist'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'
import { LogOut, User } from 'lucide-react'
import axios from 'axios'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalLogin, setIsModalLogin] = useState(false)
    const [isModalRegister, setIsModalRegister] = useState(false)
    const [navBg, setNavBg] = useState(false);
    const [isMounted, setIsMounted] = useState(false)
    const [user, setUser] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem("user")
            return storedUser ? JSON.parse(storedUser) : null
        }
    })
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        setIsMounted(true)
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const toggleLogin = () => {
        setIsModalLogin(!isModalLogin)
        setIsModalRegister(false)
    }

    const toggleRegister = () => {
        setIsModalRegister(!isModalRegister)
        setIsModalLogin(false)
    }

    const changeNavBg = () => {
        if (window.scrollY >= 200) {
            setNavBg(true);
        } else {
            setNavBg(false);
        }
    }

    const switchToRegister = () => {
        setIsModalLogin(false)
        setIsModalRegister(true)
    }

    const switchToLogin = () => {
        setIsModalRegister(false)
        setIsModalLogin(true)
    }

    const closeAllModals = () => {
        setIsModalLogin(false)
        setIsModalRegister(false)
    }

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/logout', {}, { withCredentials: true })
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            setUser(null)
            // Optional: redirect to home or reload page
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        const getDataGoogle = async () => {
            try {

                const response = await axios.get('http://localhost:8080/me', { withCredentials: true })
                const { user } = response.data
                // localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUser(user)
            } catch (error: any) {
                if (error.response && error.response.status === 401) {
                    // ✅ User belum login
                    console.log("Belum login");
                    setUser(null);
                    localStorage.removeItem("user");
                } else {
                    console.error("Error lain:", error);
                }
            }
        }
        getDataGoogle()
    }, [])


    useEffect(() => {
        window.addEventListener('scroll', changeNavBg)
        return () => {
            window.removeEventListener('scroll', changeNavBg)
        }
    }, [])

    if (!isMounted) {
        return null // atau skeleton/loading biar ga mismatch
    }
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${pathname === '/'
                ? navBg
                    ? 'bg-white shadow-md'
                    : 'bg-transparent'
                : 'bg-white shadow-md'
            }
        `}>

            {/* Login Modal */}
            <ModalLogin
                isOpen={isModalLogin}
                onClose={closeAllModals}
                onSwitchToRegister={switchToRegister}
                onLoginSuccess={(user) => setUser(user)}
            />

            {/* Register Modal */}
            <ModalRegister
                isOpen={isModalRegister}
                onClose={closeAllModals}
                onSwitchToLogin={switchToLogin}
                onLoginSuccess={(user) => setUser(user)}
            />

            <div className='flex justify-between items-center py-4 px-6 md:px-20'>
                {/* Logo */}
                <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>
                    VacationFun
                </h1>

                {/* Desktop Menu */}
                <div className={`hidden md:flex gap-6 font-bold ${pathname === '/' ? navBg ? 'text-black' : 'text-white' : 'text-black'
                    }`}>
                    <Link href='/' className='hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Home
                    </Link>
                    <Link href='/hotels' className='hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Hotels
                    </Link>
                    <Link href='/packages' className='hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Packages
                    </Link>
                    <Link href='/contact' className='hover:text-blue-500 transition-colors duration-200 relative after:content-[""] after:block after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'>
                        Contact
                    </Link>
                </div>

                {/* Desktop Login Button / User Menu */}
                <div className="hidden md:flex gap-3">
                    {user ? (
                        <div className="relative">
                            <Accordion type="single" collapsible className="w-48">
                                <AccordionItem value="user-menu" className="border-none">
                                    <AccordionTrigger className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors hover:no-underline">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                <User className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700 truncate max-w-24">
                                                {user.name}
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                        <div className="p-2">
                                            <div className="px-3 py-2 border-b border-gray-100">
                                                <p className="text-sm font-medium text-gray-900 truncate">
                                                    {user.name}
                                                </p>
                                                <p className="text-xs text-gray-500 truncate">
                                                    {user.email}
                                                </p>
                                            </div>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors mt-1"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Logout
                                            </button>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    ) : (
                        <button
                            onClick={toggleLogin}
                            className='bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200'
                        >
                            Login
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className='md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1'
                >
                    <span className={`w-6 h-0.5 ${pathname === '/' && !navBg ? 'bg-white' : 'bg-gray-800'
                        } transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 ${pathname === '/' && !navBg ? 'bg-white' : 'bg-gray-800'
                        } transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 ${pathname === '/' && !navBg ? 'bg-white' : 'bg-gray-800'
                        } transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
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
                    <div className='px-6 py-3 bg-white'>
                        {user ? (
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                        <User className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                        <p className="text-xs text-gray-500">{user.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2'
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        toggleRegister()
                                        setIsMenuOpen(false)
                                    }}
                                    className='flex-1 border border-gray-300 text-gray-700 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200'
                                >
                                    Daftar
                                </button>
                                <button
                                    onClick={() => {
                                        toggleLogin()
                                        setIsMenuOpen(false)
                                    }}
                                    className='flex-1 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors duration-200'
                                >
                                    Login
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar