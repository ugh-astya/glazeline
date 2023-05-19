import React from "react";
import hero1 from "../assets/old/1.png";
import hero2 from "../assets/old/6.jpg";
import logo from "../assets/logo.svg";

const Hero = () => {
    return (
        <section className="fade-in h-[calc(100vh-65px)]">
            {/* first row */}
            <div className="flex items-center">
                <img
                    src={hero1}
                    alt="Home Interior"
                    className="w-1/2 h-[calc(50vh-34px)] object-cover object-bottom"
                />
                <div className="w-1/2 flex flex-col justify-center pl-4 pr-12">
                    <h1 className="font-hero text-2xl md:text-3xl font-medium mb-4 md:text-right text-center">
                        The best rooms have something
                        <br />
                        to say about the people
                        <br />
                        who live in them
                    </h1>
                </div>
            </div>
            {/* first row */}
            <div className="flex items-center">
                <div className="w-1/2 flex flex-col justify-center items-center pr-4 pl-12">
                    <h2 className="font-hero text-xl md:text-2xl font-medium mb-4 text-center">
                        speak in style with
                    </h2>
                    <img
                        src={logo}
                        alt="GlazeLine"
                        width="60%"
                        className="mt-4 invert"
                    />
                </div>
                <img
                    src={hero2}
                    alt="Home Interior"
                    className="w-1/2 h-[calc(50vh-34px)] object-cover object-bottom"
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
