import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// import images
import img1 from "../assets/carousel/1.png";
import img2 from "../assets/carousel/2.png";
import img3 from "../assets/carousel/3.png";
import img4 from "../assets/carousel/4.png";
import img5 from "../assets/carousel/5.png";
import img6 from "../assets/carousel/6.png";
import img7 from "../assets/carousel/7.jpg";
import img8 from "../assets/carousel/8.jpg";

const Carousel = () => {
    return (
        <div className="h-[calc(100vh-69px)] bg-red-100">
            <Swiper
                // breakpoints={{
                //     640: {
                //         slidesPerView: 1,
                //     },
                //     768: {
                //         slidesPerView: 2,
                //     },
                //     1024: {
                //         slidesPerView: 3,
                //     },
                // }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src={img1}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img2}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img3}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img4}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img5}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img6}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img7}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img8}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
