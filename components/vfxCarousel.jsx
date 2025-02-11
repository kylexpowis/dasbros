import { Swiper, SwiperSlide } from "swiper/react";

export default function VFXCarousel() {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2></h2>
            <a href="#" className="carousel-link"></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2></h2>
            <a href="#" className="carousel-link"></a>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
}
