import React from "react";
import { Link } from "react-router-dom";

const ChooseUs = () => {
    return (
        <div className="fade-in bg-black text-white px-2 md:px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto flex flex-col gap-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-vogue tracking-wider text-center md:text-left uppercase">
                    Why Choose Us?
                </h2>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="md:w-1/2 flex flex-col">
                        {/* <h2 className="text-center md:text-left font-hero text-2xl md:text-3xl font-medium mb-6">
                            Why Choose Us
                        </h2> */}
                        <h3 className="text-center md:text-left uppercase font-semibold text-xl md:text-2xl tracking-widest">
                            We deliver for
                            <br /> you whatever you need
                        </h3>
                        {/* <div className="mt-5">
                            <Link
                                to="/"
                                className="bg-black text-white uppercase py-2 px-4"
                            >
                                Explore{" "}
                                <i className="bi bi-arrow-right ml-2"></i>
                            </Link>
                        </div> */}
                    </div>
                    <div className="md:w-1/2 text-justify">
                        <p className="text-lg">
                            When it comes to your home renovation, tiling, and
                            interior design needs, trust Glazeline to provide a
                            comprehensive solution. With our extensive industry
                            experience, our passion for creative design and a
                            curated selection of top-quality products, we are
                            dedicated to delivering exceptional results that
                            seamlessly blend functionality and aesthetic appeal.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-4">
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                            1,00,000+
                        </h2>
                        <p className="text-lg">square feets tiled</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                            70+
                        </h2>
                        <p className="text-lg">satisfied customers</p>
                    </div>
                    <div className="flex flex-col items-end text-right">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                            20+
                        </h2>
                        <p className="text-lg">years of experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
