import React from "react";
import { Link } from "react-router-dom";
import partner1 from "../assets/partners/blackberry.png";
import partner2 from "../assets/partners/creanza.png";
import partner3 from "../assets/partners/essel.png";
import partner4 from "../assets/partners/somany.png";
import partner5 from "../assets/partners/tesa.png";
import partner6 from "../assets/partners/welspun.png";

const Partners = () => {
    return (
        <section className="fade-in px-2 md:px-4 py-20 md:py-28">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-vogue tracking-wider text-center mb-8 md:mb-16 uppercase">
                    Our Partners
                </h1>
                <div className="md:max-w-5xl mx-auto flex flex-wrap md:gap-8 gap-4 justify-center items-center">
                    <a
                        href="https://blackberrytiles.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={partner1}
                            alt=""
                            className="md:w-auto w-2/5 border border-gray-200 p-1"
                        />
                    </a>
                    <a
                        href="https://www.creanza.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={partner2}
                            alt=""
                            className="md:w-auto w-2/5 border border-gray-200 p-1"
                        />
                    </a>
                    <a
                        href="https://esselbath.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={partner3}
                            alt=""
                            className="md:w-auto w-2/5 border border-gray-200 p-1"
                        />
                    </a>
                    <a
                        href="https://www.somanyceramics.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={partner4}
                            alt=""
                            className="md:w-auto w-2/5 border border-gray-200 p-1"
                        />
                    </a>
                    <a
                        href="https://www.actiontesa.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={partner5}
                            alt=""
                            className="md:w-auto w-2/5 border border-gray-200 p-1"
                        />
                    </a>
                    <a
                        href="https://welspunflooring.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={partner6}
                            alt=""
                            className="md:w-auto w-2/5 border border-gray-200 p-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Partners;
