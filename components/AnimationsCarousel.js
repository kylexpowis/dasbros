import { Swiper, SwiperSlide } from "swiper/react";

export default function AnimationsCarousel() {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>Animations Content 1</h2>
            <a href="#" className="carousel-link">
              https://example.com/animation1.mp4
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>Animations Content 2</h2>
            <a href="#" className="carousel-link">
              https://example.com/animation2.mp4
            </a>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
}
