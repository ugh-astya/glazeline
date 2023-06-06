import React from "react";
import Gallery from "./Gallery";
import { DidMount } from "./CommonFunctions";

// import images
import top from "../assets/about-us/top.webp";
import abt1 from "../assets/about-us/pottery.webp";
import abt2 from "../assets/about-us/about_sophia.webp";
import abt3 from "../assets/about-us/handshake.webp";
import scene1 from "../assets/about-us/1.webp";
import scene2 from "../assets/about-us/2.webp";
import scene3 from "../assets/about-us/3.webp";

const About = () => {
    return (
        <>
            <section onLoad={DidMount} className="fade-in">
                <img
                    src={top}
                    alt="Glazeline"
                    className="h-[22vh] md:h-full w-full object-cover object-right"
                />
                <div className="flex flex-col my-16 md:my-24 gap-12 md:gap-24 px-8 md:px-0">
                    {/* about glazeline */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20">
                        <div className="hidden w-2/6 md:flex items-center">
                            <img src={abt1} alt="About GlazeLine" />
                        </div>
                        <div className="md:w-3/6 flex flex-col gap-6 text-lg md:text-xl text-justify">
                            <h1 className="uppercase font-semibold text-2xl md:text-3xl tracking-widest">
                                About GlazeLine
                            </h1>
                            <p>
                                Our name, Glazeline, holds significant meaning
                                in the tile industry and perfectly embodies our
                                commitment to quality, innovation, and customer
                                satisfaction. At the core of our business is the
                                profound understanding of ceramic glaze, a vital
                                element in the production of stunning tiles and
                                sanitaryware. Glaze is a liquid coating applied
                                to the surface of ceramic products, transforming
                                them into vibrant, durable, and visually
                                captivating pieces of art. It adds depth,
                                texture, and character, enhancing the overall
                                aesthetic appeal of each tile. Just as an
                                assembly line streamlines the manufacturing
                                process, a Glazeline represents the epitome of
                                efficiency and expertise in the tile industry.
                            </p>
                            <p>
                                However, Glazeline isn't solely about offering a
                                remarkable line of tile products. We take great
                                pride in our comprehensive interior design
                                consultancy services, guiding our clients in
                                transforming their spaces into stunning
                                reflections of their personal style and vision.
                            </p>
                        </div>
                        <div className="hidden w-1/6 md:flex justify-end">
                            <img src={scene1} alt="Design" />
                        </div>
                    </div>
                    {/* our founder */}
                    <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-6 md:gap-20">
                        <h1 className="flex md:hidden self-start uppercase font-semibold text-2xl md:text-3xl tracking-widest">
                            Our Founder
                        </h1>
                        <div className="md:w-2/6 flex items-center justify-end">
                            <img src={abt2} alt="Sophia Singh" />
                        </div>
                        <div className="md:w-3/6 flex flex-col gap-6 text-lg md:text-xl text-justify">
                            <h1 className="hidden md:block uppercase font-semibold text-2xl md:text-3xl tracking-widest">
                                Our Founder
                            </h1>
                            <p>
                                Meet Sophia Singh, the founder of Glazeline,
                                whose passion and expertise has shaped the very
                                essence of the business. With over 20 years of
                                invaluable industry experience, Sophia has honed
                                her skills and mastered every aspect of the tile
                                industry, leaving an indelible mark on esteemed
                                companies such as Somany Ceramics, RAK Ceramics,
                                and Wipro's Goldcoin. Where she has held various
                                pivotal roles in product development and
                                marketing to showroom executive and design
                                development. Her proficiency extends to setting
                                up new showrooms, coordinating with dealers, and
                                spearheading business development initiatives
                                for prestigious government clients like PWD,
                                Military Engineering Services, MP and Police
                                Housing.
                            </p>
                        </div>
                        <div className="hidden w-1/6 md:block">
                            <img src={scene2} alt="Design" />
                        </div>
                    </div>
                    {/* our values */}
                    <div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20">
                            <div className="md:w-2/6 flex items-center">
                                <img src={abt3} alt="Handshake" />
                            </div>
                            <div className="md:w-3/6 flex flex-col gap-6 text-lg md:text-xl text-justify">
                                <h1 className="uppercase font-semibold text-2xl md:text-3xl tracking-widest text-left">
                                    Our Value Proposition
                                </h1>
                                <p>
                                    Sophia's exceptional interpersonal skills
                                    and unwavering commitment to client
                                    satisfaction have allowed her to forge
                                    strong relationships with major
                                    stakeholders, including architects, key
                                    clients, and retail customers. Her ability
                                    to understand their unique requirements and
                                    translate them into tangible design
                                    solutions has earned her respect and
                                    admiration in the industry.
                                </p>
                                <p>
                                    Beyond her corporate achievements, Sophia's
                                    passion for interior design led her to
                                    pursue comprehensive training in the field.
                                    This fusion of business acumen and creative
                                    talents empowers Glazeline to offer holistic
                                    expertise from start to finish, ensuring
                                    that every project undertaken by us embodies
                                    excellence, functionality, and aesthetic
                                    allure.
                                </p>
                                <p>
                                    Step into Glazeline, where the artistry of
                                    glaze meets the art of design. Let us
                                    inspire you and turn your dreams into
                                    reality.
                                </p>
                            </div>
                            <div className="hidden w-1/6 md:block"></div>
                        </div>
                        <div className="hidden md:flex justify-end">
                            <div className="w-2/6 flex justify-end">
                                <img src={scene3} alt="Design" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Gallery />
        </>
    );
};

export default About;
