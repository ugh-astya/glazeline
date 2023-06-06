import React from "react";

// import images
import partner1 from "../assets/partners/blackberry.webp";
import partner2 from "../assets/partners/creanza.webp";
import partner3 from "../assets/partners/essel.webp";
import partner4 from "../assets/partners/somany.webp";
import partner5 from "../assets/partners/tesa.webp";
import partner6 from "../assets/partners/welspun.webp";

const Partners = () => {
    return (
        <section className="fade-in px-8 md:px-4 py-20 md:py-28">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-vogue tracking-wider text-center mb-8 md:mb-16 uppercase">
                    Our Partners
                </h1>
                <div className="md:max-w-5xl mx-auto flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                        <a
                            href="https://blackberrytiles.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={partner1}
                                alt="Blackberry"
                                className="border border-gray-200 p-1"
                            />
                        </a>
                        <a
                            href="https://www.creanza.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={partner2}
                                alt="Creanza"
                                className="border border-gray-200 p-1"
                            />
                        </a>
                        <a
                            href="https://esselbath.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={partner3}
                                alt="Essel"
                                className="border border-gray-200 p-1"
                            />
                        </a>
                        <a
                            href="https://www.somanyceramics.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={partner4}
                                alt="Somany"
                                className="border border-gray-200 p-1"
                            />
                        </a>
                        <a
                            href="https://www.actiontesa.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={partner5}
                                alt="Tesa"
                                className="border border-gray-200 p-1"
                            />
                        </a>
                        <a
                            href="https://welspunflooring.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={partner6}
                                alt="Welspun"
                                className="border border-gray-200 p-1"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
