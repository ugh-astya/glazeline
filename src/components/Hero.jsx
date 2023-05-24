import React from "react";
import logo from "../assets/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// import hero1 from "../assets/old/1.png";
// import hero2 from "../assets/old/6.jpg";
import hero1 from "../assets/hero_section/slider/1.jpg";
import hero2 from "../assets/hero_section/slider/2.jpg";
import hero3 from "../assets/hero_section/slider/3.jpg";
import hero4 from "../assets/hero_section/slider/4.jpg";
import hero5 from "../assets/hero_section/slider/5.jpg";
import hero6 from "../assets/hero_section/slider/6.jpg";
import hero7 from "../assets/hero_section/photo_2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { hideMenu } from "./CommonFunctions";

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
                            src={hero1}
                            alt="Home Interior"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-center"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={hero2}
                            alt="Home Interior"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-center"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={hero3}
                            alt="Home Interior"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-center"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={hero4}
                            alt="Home Interior"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-bottom"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={hero5}
                            alt="Home Interior"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-bottom"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={hero6}
                            alt="Home Interior"
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
            {/* first row */}
            <div className="flex items-center flex-col-reverse md:flex-row">
                <div className="h-[calc(50vh-80.5px)] md:h-[calc(50vh-34.5px)] md:w-1/2 flex flex-col justify-center items-center px-4 md:px-12">
                    <h2 className="font-hero text-xl md:text-2xl font-medium text-center">
                        speak in style with
                    </h2>
                    <img
                        src={logo}
                        alt="GlazeLine"
                        className="w-[calc(100vw-80px)] md:w-4/6 mt-4 invert"
                    />
                </div>
                <img
                    src={hero7}
                    alt="Home Interior"
                    className="hidden md:block w-full md:w-1/2 h-[calc(50vh-34.5px)] object-cover object-top"
                />
            </div>
        </section>
    );
};

export default Hero;

{
    /* <img src={hero2} alt="" width="100%" /> */
}
{
}
