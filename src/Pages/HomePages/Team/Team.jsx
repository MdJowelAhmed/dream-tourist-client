import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('https://touristspot.vercel.app/team')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setTeam(data))
      .catch(error => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 mb-5">
      <h2 className="text-3xl font-bold lg:text-5xl text-gray-900 dark:text-gray-100 text-center mb-10">Meet Our Team</h2>
      <p className=" text-center max-w-3xl mx-auto mb-12">Meet the passionate individuals who drive our vision forward. Our team is a diverse group of talented professionals, each bringing unique skills and perspectives to create something truly special. Get to know the people behind the scenes who are dedicated to making our mission a success</p>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="swiper-container"
      >
        {team.map(member => (
          <SwiperSlide key={member.name} className="flex justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 text-center max-w-sm w-full transition-transform transform hover:scale-105 hover:shadow-xl">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{member.name}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{member?.bio.slice(0, 120)}</p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>Email: {member.contact.email}</p>
                <p>Phone: {member.contact.phone}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
