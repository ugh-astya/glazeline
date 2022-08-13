import React from "react";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";

const Partners = () => {
    return (
        <section className="fade-in body-font">
            <div className="max-w-7xl px-2 md:px-4 py-16 mx-auto">
                <div className="md:mb-16">
                    <h1 className="text-2xl md:text-3xl xl:text-6xl font-medium font-vogue tracking-[0.12em] text-gray-900 text-center mb-12 uppercase">
                        Our Partners
                    </h1>
                    <div className="w-full md:max-w-5xl mx-auto flex flex-wrap md:gap-8 gap-4 justify-center items-center">
                        <img
                            src={partner1}
                            alt=""
                            className="md:w-auto w-2/5"
                        />
                        <img
                            src={partner2}
                            alt=""
                            className="md:w-auto w-2/5"
                        />
                        <img
                            src={partner3}
                            alt=""
                            className="md:w-auto w-2/5"
                        />
                        <img
                            src={partner4}
                            alt=""
                            className="md:w-auto w-2/5"
                        />
                        <img
                            src={partner5}
                            alt=""
                            className="md:w-auto w-2/5"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
