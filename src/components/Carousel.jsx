import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// import styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import images
import img1 from "../assets/carousel/1.webp";
import img2 from "../assets/carousel/2.webp";
import img3 from "../assets/carousel/3.webp";
import img4 from "../assets/carousel/4.webp";
import img5 from "../assets/carousel/5.webp";
import img6 from "../assets/carousel/6.webp";
import img7 from "../assets/carousel/7.webp";
import img8 from "../assets/carousel/8.webp";
import img9 from "../assets/carousel/9.webp";
import img10 from "../assets/carousel/10.webp";

const Carousel = () => {
    const imgArray = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
    ];
    let carouselArray = [];
    for (let i = 1; i <= 10; i++) {
        carouselArray.push(
            <SwiperSlide key={i}>
                <img
                    src={imgArray[i-1]}
                    alt={`Tiles Carousel Picture ${i}`}
                    className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                />
            </SwiperSlide>
        );
    }
    return (
        <div className="fade-in hidden md:block h-[calc(100vh-69px)]">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {carouselArray}
            </Swiper>
        </div>
    );
};

export default Carousel;
