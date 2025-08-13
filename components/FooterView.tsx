import React from 'react'
import { BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'

const FooterView = () => {
    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-24 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                VacationFun
                            </span>
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Creating unforgettable vacation experiences with luxury accommodations and exceptional service. Your dream getaway awaits.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            {[
                                { icon: <ImInstagram />, name: "Instagram", gradient: "from-blue-600 to-blue-500" },
                                { icon: <BsTwitterX />, name: "X", gradient: "from-pink-500 to-purple-500" },
                                { icon: <BsYoutube />, name: "YouTube", gradient: "from-blue-400 to-cyan-400" },
                                { icon: <FaFacebook />, name: "Facebook", gradient: "from-red-600 to-red-500" }
                            ].map((social, index) => (
                                <div key={index} className="group">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25`}>
                                        <span className="text-white text-lg">{social.icon}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Gallery', 'Rooms & Suites', 'Contact'].map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3">
                            {['Room Service', 'Spa & Wellness', 'Airport Transfer', 'Tour Packages', 'Event Planning', 'Concierge'].map((service, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                                    <span className="text-white text-sm">📍</span>
                                </div>
                                <div>
                                    <p className="text-gray-300">123 Beach Street</p>
                                    <p className="text-gray-300">Bali, Indonesia</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-sm">📞</span>
                                </div>
                                <p className="text-gray-300">+62 812-3456-7890</p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-sm">📧</span>
                                </div>
                                <p className="text-gray-300">email@example.com</p>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                                />
                                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                            <p className="text-gray-400">© 2023 VacationFun. All rights reserved</p>
                            <div className="flex space-x-6">
                                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                                    <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <span className="text-gray-400 text-sm">Powered by</span>
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                                VacationTech
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative bottom border */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </footer>
    )
}

export default FooterView
