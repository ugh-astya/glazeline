import React from "react";
import logo from "../assets/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// import hero1 from "../assets/old/1.png";
// import hero2 from "../assets/old/6.jpg";
import hero11 from "../assets/hero_section/ph1/1.png";
import hero12 from "../assets/hero_section/ph1/2.png";
import hero13 from "../assets/hero_section/ph1/3.jpg";
import hero14 from "../assets/hero_section/ph1/4.jpg";
import hero2 from "../assets/hero_section/photo_2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Hero = () => {
    return (
        <section className="fade-in md:h-[calc(100vh-69px)]">
            {/* first row */}
            <div className="flex items-center flex-col md:flex-row">
                <Swiper
                    direction={"vertical"}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full md:w-1/2 h-[calc(50vh-34.5px)]"
                >
                    <SwiperSlide>
                        <img
                            src={hero11}
                            alt="Home Interior"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-center"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={hero12}
                            alt="Home Interior"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-center"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={hero13}
                            alt="Home Interior"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-center"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={hero14}
                            alt="Home Interior"
                            className="w-full h-[calc(50vh-34.5px)] object-cover object-bottom"
                        />
                    </SwiperSlide>
                </Swiper>
                <div className="md:w-1/2 flex h-[calc(50vh-34.5px)] items-center justify-end md:pl-4 md:pr-24">
                    <h1 className="font-hero text-2xl md:text-3xl font-medium md:text-right text-center">
                        The best rooms have something
                        <br />
                        to say about the people
                        <br />
                        who live in them
                    </h1>
                </div>
            </div>
            {/* first row */}
            <div className="flex items-center flex-col-reverse md:flex-row">
                <div className="h-[calc(50vh-34.5px)] md:w-1/2 flex flex-col justify-center items-center px-4 md:px-12">
                    <h2 className="font-hero text-xl md:text-2xl font-medium text-center">
                        speak in style with
                    </h2>
                    <img
                        src={logo}
                        alt="GlazeLine"
                        className="w-full md:w-4/6 mt-4 invert"
                    />
                </div>
                <img
                    src={hero2}
                    alt="Home Interior"
                    className="w-full md:w-1/2 h-[calc(50vh-34.5px)] object-cover object-top"
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
