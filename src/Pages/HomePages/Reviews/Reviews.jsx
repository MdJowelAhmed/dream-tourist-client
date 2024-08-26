import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    // Duplicate reviews to ensure looping works
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Customer Reviews</h1>

            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                }}
            >
                {duplicatedReviews.map((review, index) => (
                    <SwiperSlide key={index} className="p-4 border rounded-lg shadow-lg bg-white">
                        <div className="flex items-center mb-4">
                            <img
                                src={review.profile}
                                alt={review.name}
                                className="w-20 h-20 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{review.name}</h2>
                                <p className="text-sm text-gray-600">{review.country}</p>
                            </div>
                        </div>
                        <p className="text-gray-700">{review.comment}....</p>
                        <div className='flex justify-between'>
                            <p className="text-yellow-500 mt-2">Rating: {review.rating} / 5</p>
                            <p className="text-gray-400 text-sm mt-2">{review.date}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
