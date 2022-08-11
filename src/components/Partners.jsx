import React from "react";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";

const Partners = () => {
    return (
        <section className="body-font">
            <div className="max-w-7xl px-5 py-16 mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl font-medium font-hero text-gray-900 text-center mb-12 uppercase">
                        Our Partners
                    </h1>
                    <div className="max-w-5xl mx-auto flex flex-wrap gap-8 justify-center items-center">
                        <img src={partner1} alt="" />
                        <img src={partner2} alt="" />
                        <img src={partner3} alt="" />
                        <img src={partner4} alt="" />
                        <img src={partner5} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
