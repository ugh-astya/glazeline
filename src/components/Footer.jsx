import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <div className="fade-in text-white body-font bg-black">
            <div className="max-w-7xl px-2 md:px-4 py-5 mx-auto flex items-center md:flex-row flex-col">
                <Link to="/" className="flex md:justify-start justify-center">
                    <img src={logo} alt="Glazeline" width="80%" />
                </Link>
                <p className="text-white  md:ml-4 md:pl-4 md:border-l-2 md:border-gray-500 py-2 mt-0">
                    © 2020 - {new Date().getFullYear()}
                </p>
                <span className="inline-flex md:ml-auto justify-center md:justify-start ">
                    Developed by -
                    <a
                        href="https://linkedin.com/in/ajaycc17"
                        target="_blank"
                        rel="noreferrer nofollow"
                        className="text-yellow-100 pl-1 font-medium"
                    >
                        Ajay Choudhury
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
