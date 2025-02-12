import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import { Play } from "lucide-react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

export default function AnimationsCarousel() {
  const animations = [
    {
      title: "AYRTN",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/AYRTN.mp4",
      thumbnail: "", // Add thumbnails later
    },
    {
      title: "DJ Jack Wood",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/DJ+JACK+WOOD+animation.mp4",
      thumbnail: "",
    },
    {
      title: "Final FM Party Animation",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FINAL+FM+PARTY+ANIMATION+.mp4",
      thumbnail: "",
    },
    {
      title: "Peak of the week",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/Peak+Of+The+Week+FINAL+0000-0280.mp4",
      thumbnail: "",
    },
    {
      title: "Remo",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/remo+updated.mp4",
      thumbnail: "",
    },
  ];

  const [playing, setPlaying] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        onSlideChange={({ realIndex }) => setCurrentIndex(realIndex)}
      >
        {animations.map((animation, index) => (
          <SwiperSlide key={index}>
            <div className="relative group w-full h-80 flex items-center justify-center">
              {index === currentIndex && (
                <h2 className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-md text-sm">
                  {animation.title}
                </h2>
              )}
              {playing === index ? (
                <video
                  className="h-full w-auto max-w-full object-contain rounded-xl"
                  controls
                  autoPlay
                >
                  <source src={animation.src} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="relative w-full h-full bg-black bg-opacity-60 rounded-xl flex items-center justify-center cursor-pointer group-hover:opacity-80 transition-opacity"
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
