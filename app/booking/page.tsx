import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="sticky top-0 z-10 shadow-lg bg-white/90 backdrop-blur-md border-b border-gray-200 w-full p-4">
        <Link href={"/room/ab"} className="flex items-center space-x-3">
          <ArrowLeft className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer transition-colors" />
          <h1 className="text-xl font-semibold text-gray-800">Hotel Booking</h1>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6">
            <h1 className="text-2xl font-bold text-white mb-2">Complete Your Booking</h1>
            <p className="text-blue-100">Fill in the details below to reserve your room</p>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-8">
            {/* Personal Information */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                Informasi Personal
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                    placeholder="contoh@email.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                    placeholder="+62 812-3456-7890"
                  />
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                Detail Booking
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Check-in <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="date" 
                    id="checkin" 
                    name="checkin" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Check-out <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="date" 
                    id="checkout" 
                    name="checkout" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Kamar <span className="text-red-500">*</span>
                  </label>
                  <select 
                    id="roomType" 
                    name="roomType" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                  >
                    <option value="">-- Pilih Jenis Kamar --</option>
                    <option value="single">Single Room</option>
                    <option value="double">Double Room</option>
                    <option value="suite">Suite Room</option>
                    <option value="family">Family Room</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Dewasa <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="adults" 
                    name="adults" 
                    min="1" 
                    defaultValue="1" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Anak-anak
                  </label>
                  <input 
                    type="number" 
                    id="children" 
                    name="children" 
                    min="0" 
                    defaultValue="0" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="roomCount" className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Kamar <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="number" 
                    id="roomCount" 
                    name="roomCount" 
                    min="1" 
                    defaultValue="1" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                Permintaan Khusus (Opsional)
              </h2>

              <div>
                <label htmlFor="specialRequest" className="block text-sm font-medium text-gray-700 mb-2">
                  Catatan Tambahan
                </label>
                <textarea 
                  id="specialRequest" 
                  name="specialRequest" 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm resize-none"
                  placeholder="Permintaan khusus, kebutuhan aksesibilitas, preferensi kamar, dll."
                ></textarea>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                Metode Pembayaran
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                    Pilih Metode <span className="text-red-500">*</span>
                  </label>
                  <select 
                    id="paymentMethod" 
                    name="paymentMethod" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                  >
                    <option value="">-- Pilih Metode Pembayaran --</option>
                    <option value="bank">Transfer Bank</option>
                    <option value="credit-card">Kartu Kredit</option>
                    <option value="ewallet">E-Wallet (GoPay, OVO, DANA)</option>
                    <option value="cod">Bayar di Tempat</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="kupon" className="block text-sm font-medium text-gray-700 mb-2">
                    Kode Kupon (Jika ada)
                  </label>
                  <input 
                    type="text" 
                    id="kupon" 
                    name="kupon" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm"
                    placeholder="Masukkan kode kupon"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="paymentProof" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Bukti Pembayaran (Jika Transfer Bank)
                  </label>
                  <div className="relative">
                    <input 
                      type="file" 
                      id="paymentProof" 
                      name="paymentProof" 
                      accept="image/*,.pdf"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white hover:shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Format: JPG, PNG, PDF (Max 5MB)</p>
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-start space-x-3 mb-6">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms" 
                  required 
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  Saya setuju dengan{' '}
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    syarat & ketentuan
                  </a>
                  {' '}yang berlaku dan telah membaca{' '}
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    kebijakan privasi
                  </a>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg font-bold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Booking Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page