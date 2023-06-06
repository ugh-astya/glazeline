import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { hideMenu } from "./CommonFunctions";

// import styles
import "swiper/css";
import "swiper/css/pagination";

// import images
import logo from "../assets/hero/hero-logo.svg";
import hero2 from "../assets/hero/hero-2.webp";
import slide1 from "../assets/hero/slider/1.webp";
import slide2 from "../assets/hero/slider/2.webp";
import slide3 from "../assets/hero/slider/3.webp";
import slide4 from "../assets/hero/slider/4.webp";
import slide5 from "../assets/hero/slider/5.webp";
import slide6 from "../assets/hero/slider/6.webp";
import slide7 from "../assets/hero/slider/7.webp";
import slide8 from "../assets/hero/slider/8.webp";

const Hero = () => {
    return (
        <section onLoad={hideMenu} className="fade-in md:h-[calc(100vh-69px)]">
            {/* first row */}
            <div className="flex items-center flex-col md:flex-row">
                <Swiper
                    direction={"vertical"}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper w-full md:w-1/2 h-[calc(50vh-34.5px)]"
                >
                    <SwiperSlide>
                        <img
                            src={slide1}
                            alt="Home Interior Glazeline"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-center"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slide2}
                            alt="Home Interior Glazeline-2"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-center"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slide3}
                            alt="Home Interior Glazeline-3"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-center"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slide4}
                            alt="Home Interior Glazeline-4"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-bottom"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slide5}
                            alt="Home Interior Glazeline-5"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-bottom"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slide6}
                            alt="Home Interior Glazeline-6"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-bottom"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slide7}
                            alt="Home Interior Glazeline-7"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-bottom"
                        />
                    </SwiperSlide>
                       <SwiperSlide>
                        <img
                            src={slide8}
                            alt="Home Interior Glazeline-8"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-bottom"
                        />
                    </SwiperSlide>
                </Swiper>
                <div className="z-10 -mt-[calc(50vh-34.5px)] md:mt-0 md:w-1/2 flex h-[calc(50vh-34.5px)] items-center justify-end md:pl-4 md:pr-24">
                    <h1 className="hidden md:block font-hero text-2xl md:text-3xl font-medium md:text-right text-center">
                        Living spaces are a reflection <br /> of one's self
                    </h1>
                    <h1 className="inline-flex flex-col md:hidden font-hero text-2xl md:text-3xl font-medium md:text-right text-center px-4">
                        <span className="backdrop-blur bg-white/80 md:bg-transparent leading-[2.395rem] md:leading-8 px-4">
                            Living spaces are a
                        </span>
                        <span className="backdrop-blur bg-white/80 md:bg-transparent leading-[2.395rem] md:leading-8 px-4">
                            reflection of one's self
                        </span>
                    </h1>
                </div>
            </div>
            {/* second row */}
            <div className="flex items-center flex-col-reverse md:flex-row">
                <div className="h-[calc(50vh-80.5px)] md:h-[calc(50vh-34.5px)] md:w-1/2 flex flex-col justify-center items-center px-4 md:px-12">
                    <h2 className="font-hero text-xl md:text-2xl font-medium text-center">
                        speak in style with
                    </h2>
                    <img
                        src={logo}
                        alt="Glazeline"
                        className="w-[calc(100vw-80px)] md:w-4/6 mt-4 invert"
                    />
                </div>
                <img
                    src={hero2}
                    alt="Glazeline logo"
                    className="hidden md:block w-full md:w-1/2 h-[calc(50vh-34.5px)] object-cover object-top"
                />
            </div>
        </section>
    );
};

export default Hero;
