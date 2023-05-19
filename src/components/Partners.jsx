import React from "react";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";

const Partners = () => {
    return (
        <section className="fade-in h-[calc(100vh-65px)] flex justify-center items-center px-2 md:px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl md:text-3xl xl:text-6xl font-medium font-vogue tracking-wider text-center mb-16 uppercase">
                    Our Partners
                </h1>
                <div className="md:max-w-5xl mx-auto flex flex-wrap md:gap-8 gap-4 justify-center items-center">
                    <img
                        src={partner1}
                        alt=""
                        className="md:w-auto w-2/5 border border-gray-200 p-1"
                    />
                    <img
                        src={partner2}
                        alt=""
                        className="md:w-auto w-2/5 border border-gray-200 p-1"
                    />
                    <img
                        src={partner3}
                        alt=""
                        className="md:w-auto w-2/5 border border-gray-200 p-1"
                    />
                    <img
                        src={partner4}
                        alt=""
                        className="md:w-auto w-2/5 border border-gray-200 p-1"
                    />
                    <img
                        src={partner5}
                        alt=""
                        className="md:w-auto w-2/5 border border-gray-200 p-1"
                    />
                    <img
                        src={partner6}
                        alt=""
                        className="md:w-auto w-2/5 border border-gray-200 p-1"
                    />
                </div>
            </div>
        </section>
    );
};

export default Partners;
