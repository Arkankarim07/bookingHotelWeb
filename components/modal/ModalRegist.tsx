/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

interface ModalRegisterProps {
    isOpen: boolean
    onClose: () => void
    onSwitchToLogin: () => void
    onLoginSuccess: (user: { email: string; name: string; }) => void
}

const ModalRegister = ({ isOpen, onClose, onSwitchToLogin, onLoginSuccess }: ModalRegisterProps) => {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({})

    const handleApi = async () => {
        try {
            const response = await axios.post('http://localhost:8080/register', registerData)
            const { data, token } = response.data
            onLoginSuccess(data)
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(data))

            // reset & close modal
            handleClose()
        } catch (error: any) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors) // tangkap error validasi
            } else {
                console.error(error)
            }
        }
    }

    const handleRegister = () => {
        if (registerData.password !== registerData.confirmPassword) {
            setErrors({ confirmPassword: ["Password tidak sama!"] })
            return
        }
        handleApi()
    }

    const handleGoogleLogin = () => {
        // TODO: proses login Google
        window.location.href = 'http://localhost:8080/auth/google'
    }

    const handleClose = () => {
        setRegisterData({ name: "", email: "", password: "", confirmPassword: "" })
        setErrors({})
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50'>
            <div className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 overflow-hidden">
                {/* Header */}
                <div className="px-6 pt-6 pb-4 text-center border-b border-gray-100">
                    <h2 className="text-2xl font-bold">
                        <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Daftar
                        </span>
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">Buat akun baru Anda</p>
                </div>

                {/* Form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleRegister()
                    }}
                    className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                        <input
                            type="text"
                            value={registerData.name}
                            onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={registerData.email}
                            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={registerData.password}
                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
                        <input
                            type="password"
                            value={registerData.confirmPassword}
                            onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword[0]}</p>}
                    </div>

                    <button
                        className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 rounded-lg"
                    >
                        Daftar
                    </button>
                    <button
                        className="w-full bg-gradient-to-r border-2 gap-4 flex justify-center items-center  border-gray-200 text-white font-semibold py-3 rounded-lg"
                        onClick={handleGoogleLogin}
                    >
                        <FcGoogle />
                        <span className='text-black'>Login with Google</span>
                    </button>
                </form>

                {/* Footer */}
                <div className="px-6 pb-6 text-center text-sm text-gray-600">
                    Sudah punya akun?
                    <button onClick={onSwitchToLogin} className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                        Login
                    </button>
                </div>

                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
                >
                    ×
                </button>

            </div>
        </div>
    )
}

export default ModalRegister
