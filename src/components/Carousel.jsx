import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
// import images
import img1 from "../assets/carousel/1.jpg";
import img2 from "../assets/carousel/2.jpg";
import img3 from "../assets/carousel/3.jpg";
import img4 from "../assets/carousel/4.jpg";
import img5 from "../assets/carousel/5.jpg";
import img6 from "../assets/carousel/6.jpg";
import img7 from "../assets/carousel/7.jpg";
import img8 from "../assets/carousel/8.jpg";
import img9 from "../assets/carousel/9.jpg";
import img10 from "../assets/carousel/10.jpg";

const Carousel = () => {
    return (
        <div className="hidden md:block h-[calc(100vh-69px)] bg-red-100">
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
                <SwiperSlide>
                    <img
                        src={img9}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img10}
                        alt=""
                        className="object-cover h-[calc(100vh-69px)] w-screen object-bottom overflow-hidden"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
