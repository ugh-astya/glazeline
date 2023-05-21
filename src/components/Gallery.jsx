import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
// import images
import img1 from "../assets/our_gallery/1.jpg";
import img2 from "../assets/our_gallery/2.jpg";
import img3 from "../assets/our_gallery/3.jpg";
import img4 from "../assets/our_gallery/4.jpg";
import img5 from "../assets/our_gallery/5.jpg";
import img6 from "../assets/our_gallery/6.jpg";
import img7 from "../assets/our_gallery/7.jpg";
import img8 from "../assets/our_gallery/8.jpg";

const Gallery = () => {
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
                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;
