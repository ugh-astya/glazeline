import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// import styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery = () => {
    return (
        <section className="fade-in body-font">
            <div className="max-w-7xl px-2 md:px-4 md:py-32 pt-16 mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl xl:text-6xl font-medium font-vogue tracking-[0.12em] text-gray-900 text-center uppercase">
                        Gallery
                    </h1>
                </div>
                <Swiper
                    slidesPerView={
                        document.documentElement.scrollWidth > 767.99 ? 3 : 1
                    }
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/gallery/gallery5.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/gallery/gallery6.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/about.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/about1.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/about6.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/about2.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/gallery/gallery.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/gallery/gallery1.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/gallery/gallery2.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/gallery/gallery3.png" alt="" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/gallery/gallery4.png" alt="" width="100%" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;
