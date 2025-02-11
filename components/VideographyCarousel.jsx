"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoCarousel() {
  const videos = [
    {
      title: "FM Party - Dont Be Late",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+-+DONT+BE+LATE+COMPLETE+2.mp4",
    },
    {
      title: "FM Party - The Link Up",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/final+fm+party+the+link+up.mp4",
    },
    {
      title: "GEEKFILES",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/DASBROS+GEEKFILES+COMPETITION.mp4",
    },
    {
      title: "FM Party - The Drop Off",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+3+-+THE+DROP+OFF.mp4",
    },
    {
      title: "FM Party Ad",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+AD+4+COMPLETE+FINAL.mp4",
    },
    {
      title: "FM Party Ad 2",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+ADVERT+COMPLETE.mp4",
    },
    {
      title: "July 7 - You Like It",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/July+7++-+You+Like+It+Master+(COMPLETE).mp4",
    },
    {
      title: "Ken Carson",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/KEN+CARSON+complete.mp4",
    },
    {
      title: "Sainte - Leeds Fest 2023",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/LEEDS+FESTIVAL+SAINTE+2023.mp4",
    },
    {
      title: "Meekz - Leeds Fest 2023",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/MEEKZ+Leeds+Festival.mp4",
    },
    {
      title: "Skitzo - Wear The Grit",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/SKITZO+-+WEAR+THE+GRIT+-+DIR+FINAL.mp4",
    },
  ];

  const [playing, setPlaying] = useState(null);

  // Keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler to play the video
  const handlePlay = (index) => {
    setPlaying(index);
  };

  return (
    <div className="carousel-container">
      <Swiper
        effect="cards"
        grabCursor={true}
        loop={true}
        navigation={true}
        className="mySwiper"
        modules={[EffectCards, Navigation]}
        onSlideChange={({ realIndex }) => setCurrentIndex(realIndex)} // Update the index on slide change
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="relative group w-full h-80 flex items-center justify-center">
              <h2 className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-md text-sm">
                {video.title}
              </h2>
              {playing === index ? (
                <video
                  className="w-full h-full object-cover rounded-xl"
                  controls
                  autoPlay
                >
                  <source src={video.src} type="video/mp4" />
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
