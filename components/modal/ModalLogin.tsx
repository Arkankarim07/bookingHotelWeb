import axios from 'axios';
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
interface ModalLoginProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToRegister: () => void;
    onLoginSuccess: (user: { email: string; name: string; }) => void

}
const ModalLogin = ({ isOpen, onClose, onSwitchToRegister, onLoginSuccess }: ModalLoginProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setError] = useState<{ [key: string]: string[] }>({})
    const handleApi = async () => {
        try {

            const payload = {
                email: email,
                password: password
            }
            const response = await axios.post('http://localhost:8080/login', payload, { withCredentials: true })
            const { token, data } = response.data
            localStorage.setItem("user", JSON.stringify(data))

            localStorage.setItem("token", token)
            onLoginSuccess(data)
            handleClose()
            console.log(response.data);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
                if (error.response.status === 422) {
                    setError(error.response.data.errors)
                } else if (error.response.status === 401) {
                    setError({ general: [error.response.data.message] })
                }
            } else {
                console.error(error)
            }
        }

    }
    const handleLogin = async () => {
        await handleApi()
        console.log("Email:", email)
        console.log("Password:", password)
        // TODO: proses login
    }

    const handleGoogleLogin = () => {
        // TODO: proses login Google
        window.location.href = 'http://localhost:8080/auth/google'
    }

    const handleClose = () => {
        setEmail("")
        setPassword("")
        onClose()
    }

    if (!isOpen) return null

    return (
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
                <form
                    className="p-6 space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault() // biar nggak reload halaman
                        handleLogin()
                    }}
                >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="masukkan email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        {errors.general && <p className="text-red-500 text-sm">{errors.general[0]}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="masukkan password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                        Login
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
                    Belum punya akun?
                    <button onClick={onSwitchToRegister} className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                        Daftar
                    </button>
                </div>

                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                    ×
                </button>
            </div>
        </div>
    )
}

export default ModalLogin