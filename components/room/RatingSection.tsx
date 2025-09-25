/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'next/navigation'
const RatingSection = () => {
    const [rating, setRating] = useState<number | null>(null)
    const [review, setReview] = useState<string>("")

    const { id } = useParams()

    const fetchCommentByID = async () => {
        const response = await axios.get(`http://localhost:8080/comment/get/${id}`)
        return response.data.data

    }

    const postComment = async () => {
        try {
            const payload = {
                room_id: Number(id),
                rating: rating,
                comment: review
            }
            const response = await axios.post(`http://localhost:8080/comment/create`, payload, {
                withCredentials: true,

            })
            console.log(response.data)
        } catch (error: any) {
            console.log(error)
        }
    }
    const { data: comment, error, isLoading } = useQuery({
        queryKey: ['comment'],
        queryFn: fetchCommentByID
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div className="min-h-screen bg-gray-50 px-4 sm:px-8 md:px-12 lg:px-20 py-8">
            <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg mx-auto">
                <h1 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6">Ulasan</h1>
                <div className="border-t pt-3">
                    <h2 className="text-lg sm:text-xl font-bold mb-4">Tulis Ulasan Anda</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            postComment()
                        }}
                        className="space-y-4 pb-6">


                        {/* Rating */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Rating</label>
                            <div className="flex items-center gap-1">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => {
                                        const currentIndex = i + 1
                                        return (
                                            <label key={i}>
                                                <input type="radio"
                                                    className='hidden'
                                                    onClick={() => setRating(currentIndex)} />
                                                <FaStar
                                                    key={i}
                                                    className={`${currentIndex <= (rating ?? 0) ? "text-yellow-400" : "text-gray-300"}  cursor-pointer text-lg`}
                                                />
                                            </label>
                                        )
                                    })}
                            </div>
                        </div>

                        {/* Komentar */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Komentar</label>
                            <textarea
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                rows={4}
                                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tulis pengalaman Anda di sini..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
                        >
                            Kirim Ulasan
                        </button>
                    </form>
                </div>
                {comment?.map((item: any) => (

                    <div
                        key={item.ID}
                        className="mb-6 last:mb-0 pb-6 last:pb-0 border-b last:border-b-0 border-gray-200"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-start sm:items-center gap-3">
                                <div className="w-12 h-12 sm:w-[50px] sm:h-[50px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                                    {["J", "S", "M"][item]}
                                </div>
                                <div className="flex flex-col gap-1 min-w-0">
                                    <h3 className="font-semibold text-sm sm:text-base">
                                        {item.user.name}
                                    </h3>
                                    <div className="flex items-center">
                                        {Array(5)
                                            .fill(0)
                                            .map((_, starIndex) => {

                                                return (

                                                    <FaStar key={starIndex}
                                                        className={`text-sm ${starIndex < item.rating ? "text-yellow-400" : "text-gray-300"
                                                            }`}
                                                    />


                                                )

                                            })}
                                    </div>
                                </div>
                            </div>
                            <p className="opacity-75 text-sm sm:text-base flex-shrink-0 self-start sm:self-center">
                                {item.CreatedAt}
                            </p>
                        </div>

                        {/* Review Text */}
                        <div className="mt-4 ml-0 sm:ml-15">
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                {item.comment}
                            </p>
                        </div>
                    </div>
                ))}
                {/* Multiple Reviews */}


                {/* Load More Button */}
                <div className="text-center mt-6 mb-8">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
                        Lihat Semua Ulasan
                    </button>
                </div>

                {/* Tambah Ulasan Form */}

            </div>
        </div>
    )
}

export default RatingSection
