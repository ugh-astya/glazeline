import React from "react";
import hero1 from "../assets/hero01.png";
import hero2 from "../assets/hero02.png";
import logo from "../assets/logo.svg";

const Hero = () => {
    return (
        <section className="fade-in bg-white">
            {/* first hero */}
            <div className="flex md:flex-row flex-col items-center">
                <div className="w-full md:w-1/2 shadow-2xl">
                    <img src={hero1} alt="" width="100%" />
                </div>
                <div className="w-full md:w-1/2 flex-col flex justify-center md:px-8 py-4 md:py-0">
                    <h1 className="font-hero text-2xl md:text-3xl xl:text-4xl font-medium mb-4 md:text-right text-center leading-8">
                        The best rooms have something
                        <br />
                        to say about the people
                        <br />
                        who live in them
                    </h1>
                </div>
            </div>
            {/* second hero */}
            <div className="flex md:flex-row-reverse flex-col items-center">
                <div className="w-full md:w-1/2 shadow-2xl">
                    <img src={hero2} alt="" width="100%" />
                </div>
                <div className="w-full md:w-1/2 flex-col flex justify-center md:px-8 py-4 md:py-0">
                    <h1 className="font-hero text-2xl font-medium text-center flex flex-col items-center tracking-[0.2em]">
                        speak in style with
                        <img
                            src={logo}
                            alt="GlazeLine"
                            width="70%"
                            className="mt-4 invert"
                        />
                    </h1>
                </div>
            </div>
            {/* a few lines */}
            <div className="max-w-4xl px-2 md:px-4 mx-auto md:pt-48 md:pb-16 py-12 text-left">
                <h2 className="font-hero text-black text-2xl md:text-3xl xl:text-4xl font-medium">
                    Great design is a solution to a problem
                </h2>
                <p className="mt-4 leading-relaxed text-lg md:text-xl md:max-w-4xl mx-auto">
                    With 20+ years of experience in the field & our offline
                    showroom at, Patrakar Colony, Bhopal, we provide the
                    solution to your tiling needs.
                </p>
            </div>
            {/* a few lines again */}
            <div>
                <div className="max-w-4xl pb-16 md:pb-48 px-2 md:px-4 mx-auto">
                    <h2 className="font-hero text-black text-2xl md:text-3xl xl:text-4xl font-medium md:text-left text-center">
                        With Glazeline, you can design your perfect space
                    </h2>
                    <p className="mt-6  leading-relaxed text-lg md:text-xl md:max-w-3xl md:text-left text-center">
                        We understand the importance of living spaces. We want
                        these spaces to be not only functional but also
                        beautiful.
                    </p>
                    <p className="mt-4  leading-relaxed text-lg md:text-xl md:max-w-4xl md:text-left text-center">
                        That's why we offer a wide range of wall and floor tiles
                        to create a decor that is as unique as you are. From our
                        exclusive designer tiles to more classic designs, we
                        have something for everyone - any budget.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
