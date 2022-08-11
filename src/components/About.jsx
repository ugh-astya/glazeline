import React from "react";
import abt1 from "../assets/about.png";
import abt2 from "../assets/about2.png";
import abt3 from "../assets/about3.png";
import abt4 from "../assets/about4.png";

const About = () => {
    return (
        <section className="fade-in body-font boxShadow">
            <div className="max-w-7xl px-2 md:px-4 mx-auto py-16 md:py-20">
                <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl mb-6">
                        From wall tiles to commercial space design, from wood
                        flooring to kitchen backsplash - We've got it all!
                    </p>
                    <p className=" text-lg md:text-xl mb-3">
                        Visit us at Bhopal to go through
                    </p>
                    <h2 className="uppercase text-2xl md:text-3xl xl:text-4xl font-medium font-hero">
                        Our Collection
                    </h2>
                </div>
                {/* collection 1 */}
                <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
                    <div className="w-full md:w-1/2 overflow-hidden sm:mt-0 backCol2 flex justify-start shadow-2xl">
                        <img src={abt1} alt="" width="100%" />
                    </div>
                    <div className="mt-auto mb-auto w-full md:w-1/2">
                        <h1 className=" uppercase font-medium text-2xl md:text-3xl mb-2">
                            Wall Tiles
                        </h1>
                        <p className="mt-3 text-lg md:text-xl  mb-4">
                            Set of high-quality wall tiles that fit any design,
                            color-scheme, and budget. Customize your bathroom or
                            bedroom with a touch of your personal style. With
                            designer tiles in a wide range of sizes and colors
                            to choose from, there's something to choose for
                            everyone.
                        </p>
                        <button className="md:float-right text-lg md:text-xl  uppercase bg-black text-white px-5 py-1">
                            Explore <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
                {/* collection 2 */}
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-16">
                    <div className="w-full md:w-1/2 overflow-hidden sm:mt-0 backCol2 flex justify-start shadow-2xl">
                        <img src={abt2} alt="" width="100%" />
                    </div>
                    <div className="mt-auto mb-auto w-full md:w-1/2 text-left md:text-right">
                        <h1 className=" uppercase font-medium text-2xl md:text-3xl mb-2">
                            Wood Flooring
                        </h1>
                        <p className="mt-3 text-lg md:text-xl  mb-4">
                            Return to nature with high quality wood to a classic
                            rustic finish wood flooring. Built for all seasons,
                            our wood flooring is durable and scratch-proof. With
                            a variety of colors, no two floors will be the same.
                        </p>
                        <button className="text-lg md:text-xl  uppercase bg-black text-white px-5 py-1">
                            Explore <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
                {/* collection 3 */}
                <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
                    <div className="w-full md:w-1/2 overflow-hidden sm:mt-0 backCol2 flex justify-start shadow-2xl">
                        <img src={abt3} alt="" width="100%" />
                    </div>
                    <div className="mt-auto mb-auto w-full md:w-1/2">
                        <h1 className=" uppercase font-medium text-2xl md:text-3xl mb-2">
                            Floor Tiles
                        </h1>
                        <p className="mt-3 text-lg md:text-xl  mb-4">
                            We have an extensive selection of tiled flooring
                            suitable for a wide range of residential and
                            commercial projects. We carry a large number of
                            different sizes and shapes for indoor and outdoor
                            spaces including bathroom tiles taht are
                            slip-resistant.
                        </p>
                        <button className="md:float-right text-lg md:text-xl  uppercase bg-black text-white px-5 py-1">
                            Explore <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
                {/* collection 4 */}
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="w-full md:w-1/2 overflow-hidden sm:mt-0 backCol2 flex justify-start shadow-2xl">
                        <img src={abt4} alt="" width="100%" />
                    </div>
                    <div className="mt-auto mb-auto w-full md:w-1/2 text-left md:text-right">
                        <h1 className=" uppercase font-medium text-2xl md:text-3xl mb-2">
                            Commercial Spaces
                        </h1>
                        <p className="mt-3 text-lg md:text-xl  mb-4">
                            Tiles perfect for commercial spaces - tech offices
                            or corporate lobbies which are durable and modern.
                            With a wide variety of colors, sizes and styles to
                            suit your taste. Whether you want marble, stone or
                            concrete-finish tiles, we have an option for you.
                        </p>
                        <button className="text-lg md:text-xl  uppercase bg-black text-white px-5 py-1">
                            Explore <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
