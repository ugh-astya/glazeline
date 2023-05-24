import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// import styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import images
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";

const Gallery = () => {
    const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];
    let galleryArray = [];
    for (let i = 1; i <= 8; i++) {
        galleryArray.push(
            <SwiperSlide key={i}>
                <img
                    src={imgArray[i - 1]}
                    alt={`Glazeline gallery picture ${i}`}
                />
            </SwiperSlide>
        );
    }
    return (
        <section className="fade-in bg-gray-100 px-2 md:px-4 py-20 md:py-28">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-vogue tracking-wider text-center uppercase mb-8">
                    Gallery
                </h1>
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {galleryArray}
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;
