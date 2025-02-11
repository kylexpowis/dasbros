import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function VideoCarousel() {
  return (
    <div className="carousel-container">
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
      <Swiper
        spaceBetween={50} // Space between slides
        slidesPerView={1} // Number of slides visible at once
        navigation={true} // Enable navigation buttons
        pagination={{ clickable: true }} // Pagination dots (optional)
        loop={true} // Loop the slides
        className="mySwiper"
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>FM Party - Dont Be Late</h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+-+DONT+BE+LATE+COMPLETE+2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>FM Party - The Link Up</h2>
            <video>
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/final+fm+party+the+link+up.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>GEEKFILES</h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/DASBROS+GEEKFILES+COMPETITION.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>FM Party - The Drop Off</h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+3+-+THE+DROP+OFF.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>FM Party Ad</h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+AD+4+COMPLETE+FINAL.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>FM Party Ad 2</h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/FM+PARTY+ADVERT+COMPLETE.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>July 7 - You like it </h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/July+7++-+You+Like+It+Master+(COMPLETE).mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>Ken Carson</h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/KEN+CARSON+complete.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>Sainte - Leeds Fest 2023</h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/LEEDS+FESTIVAL+SAINTE+2023.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>Meekz - Leeds Fest 2023</h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/MEEKZ+Leeds+Festival.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide-content">
            <h2>Skitzo - Wear The Grit</h2>
            <video controls width="100%">
              <source
                src="https://dasbrosvidepgraphy.s3.eu-north-1.amazonaws.com/SKITZO+-+WEAR+THE+GRIT+-+DIR+FINAL.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
