"use client"
import { createContext, useContext, useState } from "react"
import ModalLogin from "@/components/modal/ModalLogin"
import ModalRegister from "@/components/modal/ModalRegist"

const AuthContext = createContext()
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isModalLogin, setIsModalLogin] = useState(false)
    const [isModalRegister, setIsModalRegister] = useState(false)

    const openLogin = () => {
        setIsModalLogin(true)
        setIsModalRegister(false)
    }

    const openRegister = () => {
        setIsModalRegister(true)
        setIsModalLogin(false)
    }

    const closeAll = () => {
        setIsModalLogin(false)
        setIsModalRegister(false)
    }
    return (
        <AuthContext.Provider value={{ user, setUser, openLogin, openRegister }}>
            {children}
            <ModalLogin
                isOpen={isModalLogin}
                onClose={closeAll}
                onSwitchToRegister={openRegister}
                onLoginSuccess={(user) => setUser(user)}
            />

            <ModalRegister
                isOpen={isModalRegister}
                onClose={closeAll}
                onSwitchToLogin={openLogin}
                onLoginSuccess={(user) => setUser(user)}
            />

        </AuthContext.Provider>
    )
}


export function useAuth() {
    return useContext(AuthContext)
}