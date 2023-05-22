import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// import images
import img1 from "../assets/catalogue/wooden-images/0001.jpg";
import img2 from "../assets/catalogue/wooden-images/0002.jpg";
import img3 from "../assets/catalogue/wooden-images/0003.jpg";
import img4 from "../assets/catalogue/wooden-images/0004.jpg";
import img5 from "../assets/catalogue/wooden-images/0002.jpg";
import img6 from "../assets/catalogue/wooden-images/0002.jpg";
import img7 from "../assets/catalogue/wooden-images/0002.jpg";
import img8 from "../assets/catalogue/wooden-images/0002.jpg";

function showFloor() {}
function showWall() {}

const Catalogue = () => {
    return (
        <div className="fade-in px-2 md:px-4 py-12 md:py-20">
            <div className="max-w-5xl mx-auto">
                <h1 className="uppercase font-hero text-2xl md:text-3xl font-medium text-center mb-6">
                    Catalogue
                </h1>
                <p className="text-lg md:text-xl text-center mb-8">
                    From wall tiles to commercial space design, from wood
                    flooring to kitchen backsplash - We've got it all!
                </p>
                <div class="font-semibold text-lg text-center uppercase tracking-[0.2em]">
                    <ul class="flex gap-8">
                        <li
                            class="w-1/4 mr-2 inline-block p-2 cursor-pointer border-b border-gray-700 pb-1"
                            onClick={showFloor}
                        >
                            Floor Tiles
                        </li>
                        <li
                            class="w-1/4 mr-2 inline-block p-2 cursor-pointer"
                            onClick={showWall}
                        >
                            Wall Tiles
                        </li>
                        {/* <li
                            class="w-1/4 mr-2 inline-block p-2 cursor-pointer border-b border-gray-700"
                            onClick={showComm}
                        >
                            Commercial Spaces
                        </li>
                        <li
                            class="w-1/4 mr-2 inline-block p-2 cursor-pointer border-b border-gray-700"
                            onClick={showWood}
                        >
                            Wood Flooring
                        </li> */}
                    </ul>
                </div>
                {/* floor */}
                <div id="floorCat">
                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper h-[calc(100vh-161px)] border-2 my-4"
                    >
                        <SwiperSlide className="flex justify-center">
                            <img
                                src={img1}
                                alt=""
                                className="h-[calc(100vh-161px)] object-contain"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center">
                            <img
                                src={img2}
                                alt=""
                                className="h-[calc(100vh-161px)] object-contain"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* wall */}
                <div id="wallCat">
                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper h-[calc(100vh-161px)] border-2 my-4"
                    >
                        <SwiperSlide className="flex justify-center">
                            <img
                                src={img3}
                                alt=""
                                className="h-[calc(100vh-161px)] object-contain"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center">
                            <img
                                src={img4}
                                alt=""
                                className="h-[calc(100vh-161px)] object-contain"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <p className="mt-8 text-lg md:text-xl">
                    Found something you like? Drop us a call at{" "}
                    <span className="font-semibold">+91-700-058-8373</span>.
                </p>
            </div>
        </div>
    );
};

export default Catalogue;
