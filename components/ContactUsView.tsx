import React from 'react'

const ContactUsView = () => {
    return (
        <div className="relative bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 py-20 px-6 md:px-24 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Contact Us
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ready to book your perfect stay? Get in touch with us and let's make your dream vacation a reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>

                        {[
                            { icon: "📍", title: "Visit Us", info: "123 Beach Street, Bali, Indonesia", gradient: "from-blue-500 to-cyan-500" },
                            { icon: "📧", title: "Email Us", info: "email@example.com", gradient: "from-purple-500 to-pink-500" },
                            { icon: "📞", title: "Call Us", info: "+62 812-3456-7890", gradient: "from-green-500 to-emerald-500" },
                            { icon: "🕒", title: "Opening Hours", info: "Mon - Sun: 8:00 AM - 10:00 PM", gradient: "from-orange-500 to-red-500" }
                        ].map((contact, index) => (
                            <div key={index} className="group">
                                <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-lg">{contact.title}</h4>
                                            <p className="text-gray-600">{contact.info}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Contact Form */}
                    <div className="relative">
                        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white/50">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h3>
                                <p className="text-gray-600">We'll get back to you within 24 hours</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/90 placeholder-gray-400"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/90 placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/90 placeholder-gray-400"
                                    />
                                </div>

                                <div className="relative group">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number (Optional)"
                                        className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/90 placeholder-gray-400"
                                    />
                                </div>

                                <div className="relative group">
                                    <textarea
                                        placeholder="Tell us about your stay preferences, questions, or special requests..."
                                        rows="5"
                                        className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/90 placeholder-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 text-lg relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Send Message</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </form>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsView
