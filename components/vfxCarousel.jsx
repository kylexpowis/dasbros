"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Play } from "lucide-react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VFXCarousel() {
  const vfx = [
    {
      title: "TBC",
      src: "https://example.com/vfx1.mp4",
    },
    {
      title: "TBC",
      src: "https://example.com/vfx2.mp4",
    },
    // Add more gfx videos as needed
  ];

  const [playing, setPlaying] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlay = (index) => {
    setPlaying(index);
  };

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
        onSlideChange={({ realIndex }) => setCurrentIndex(realIndex)}
      >
        {vfx.map((vfxItem, index) => (
          <SwiperSlide key={index}>
            <div className="relative group w-full h-80 flex items-center justify-center">
              <h2 className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-md text-sm">
                {vfxItem.title}
              </h2>
              {playing === index ? (
                <video
                  className="w-full h-full object-cover rounded-xl"
                  controls
                  autoPlay
                >
                  <source src={vfxItem.src} type="video/mp4" />
                </video>
              ) : (
                <div
                  className={`relative w-full h-full bg-black bg-opacity-60 rounded-xl flex items-center justify-center cursor-pointer group-hover:opacity-80 transition-opacity ${
                    currentIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={() => handlePlay(index)}
                >
                  <Play className="w-16 h-16 text-white opacity-80 transition-opacity group-hover:opacity-100" />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
