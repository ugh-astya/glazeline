import React from "react";
import logo from "../assets/logo.svg";
// import hero1 from "../assets/old/1.png";
// import hero2 from "../assets/old/6.jpg";
import hero1 from "../assets/hero_section/photo_1.jpg";
import hero2 from "../assets/hero_section/photo_2.jpg";

const Hero = () => {
    return (
        <section className="fade-in md:h-[calc(100vh-73px)]">
            {/* first row */}
            <div className="flex items-center flex-col md:flex-row">
                <img
                    src={hero1}
                    alt="Home Interior"
                    className="w-full md:w-1/2 h-[calc(50vh-36.5px)] object-cover object-center"
                />
                <div className="md:w-1/2 flex flex-col h-[calc(50vh-36.5px)] justify-center md:pl-4 md:pr-12">
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
                <div className="h-[calc(50vh-36.5px)] md:w-1/2 flex flex-col justify-center items-center md:pr-4 md:pl-12">
                    <h2 className="font-hero text-2xl md:text-3xl font-medium text-center">
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
                    className="w-full md:w-1/2 h-[calc(50vh-36.5px)] object-cover object-top"
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
