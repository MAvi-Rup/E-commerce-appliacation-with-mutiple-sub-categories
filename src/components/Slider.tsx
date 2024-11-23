"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import required Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const ImageSlider = () => {
  const slides = [
    {
      id: 1,
      src: "/images/slider1.png",
      alt: "Slider Image 1",
    },
    {
      id: 2,
      src: "/images/slider2.png",
      alt: "Slider Image 2",
    },
  ];

  return (
    <div className="w-full h-48 md:h-64 lg:h-96">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="w-full h-full rounded-lg shadow-md"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
