"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/slider-1.jpg",
  },
  {
    id: 2,
    image: "/slider-2.jpg",
  },
  {
    id: 3,
    image: "/slider-3.jpg",
  },
];

export default function Banner() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <img
                src={slide.image}
                alt="slider"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

              <div className="absolute inset-0 flex items-center justify-center text-center px-3">
                <div className="max-w-4xl">
                  <h1 className="text-3xl md:text-6xl font-bold text-[#0f172a] leading-tight">
                    Turn Your <span className="text-indigo-600">Vision</span>{" "}
                    into Reality
                  </h1>

                  <p className="mt-6 text-gray-600 text-lg md:text-lg max-w-2xl mx-auto">
                    The secure vault for your intellectual property. Protect,
                    pitch, and grow your next breakthrough idea with our global
                    network.
                  </p>

                  <button className="mt-8 px-8 py-4 rounded-2xl bg-indigo-600 text-white text-lg font-semibold hover:scale-105 hover:bg-indigo-700 transition-all duration-300 shadow-xl">
                    Explore Ideas
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="prev-btn absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
        <ChevronLeft />
      </button>

      <button className="next-btn absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
        <ChevronRight />
      </button>
    </div>
  );
}
