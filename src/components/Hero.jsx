import React from "react";
import hero1 from "../assets/hero01.png";
import hero2 from "../assets/hero02.png";
import logo from "../assets/logo.svg";

const Hero = () => {
    return (
        <section className="bg-white">
            {/* first hero */}
            <div className="flex flex-row items-center">
                <div className="w-1/2 z-10 relative left-0 top-0 shadow-2xl">
                    <img src={hero1} alt="" width="100%" />
                </div>
                <div className="w-1/2 flex-col flex justify-center pr-16">
                    <h1 className="font-hero text-5xl font-medium mb-4 text-right shadowText">
                        The best rooms have something
                        <br />
                        to say about the people
                        <br />
                        who live in them
                    </h1>
                </div>
            </div>
            {/* second hero */}
            <div className="flex flex-row-reverse items-center">
                <div className="w-1/2 z-10 relative left-0 top-0 shadow-2xl">
                    <img src={hero2} alt="" width="100%" />
                </div>
                <div className="w-1/2 flex-col flex justify-center">
                    <h1 className="font-hero text-5xl font-medium mb-4 shadowText text-center flex flex-col items-center">
                        speak in style with
                        <img
                            src={logo}
                            alt="GlazeLine"
                            width="70%"
                            className="mt-6 invert"
                        />
                    </h1>
                </div>
            </div>
            {/* a few lines */}
            <div className="max-w-7xl mx-auto py-24 text-center">
                <h2 className="font-hero text-black text-4xl font-medium">
                    Great design is a solution to a problem
                </h2>
                <p className="mt-4 font-ibm leading-relaxed text-xl md:max-w-3xl mx-auto">
                    With <strong>20+ years of experience</strong> in the field &
                    our offline showroom at{" "}
                    <strong>Patrakar Colony, Bhopal</strong>, we provide the
                    solution to your tiling needs.
                </p>
            </div>
            {/* a few lines again */}
            <div>
                <div className="max-w-7xl pb-24 mx-auto">
                    <h2 className="font-hero text-black text-4xl font-medium">
                        With Glazeline, you can design your perfect space
                    </h2>
                    <p className="mt-6 font-ibm leading-relaxed text-xl md:max-w-3xl">
                        We understand the importance of living spaces. We want
                        these spaces to be not only functional but also
                        beautiful.
                    </p>
                    <p className="mt-4 font-ibm leading-relaxed text-xl md:max-w-3xl">
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
