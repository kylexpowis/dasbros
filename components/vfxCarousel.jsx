"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

export default function VFXCarousel() {
  const vfx = [
    {
      title: "FM Party Comic Poster",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+COMIC+POSTER+FINAL.png",
    },
    {
      title: "FM Party Barber Shop",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+BARBER+SHOP.png",
    },
    {
      title: "Final FM Party Poster",
      src: "https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FINAL+FM+PARTY+POSTER+AMMENDED.png",
    },
  ];

  return (
    <div className="carousel-container">
      <Swiper
        effect="cards"
        grabCursor={true}
        loop={true}
        navigation={true}
        className="mySwiper"
        modules={[EffectCards, Navigation]}
      >
        {vfx.map((vfxItem, index) => (
          <SwiperSlide key={index}>
            <div className="relative group w-full h-80 flex items-center justify-center">
              <h2 className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-md text-sm">
                {vfxItem.title}
              </h2>

              <img
                src={vfxItem.src}
                alt={vfxItem.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
