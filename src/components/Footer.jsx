import React from "react";
import { Link } from "react-router-dom";

// import image
import logo from "../assets/glazeline-logo.svg";

const Footer = () => {
    return (
        <div className="fade-in text-white bg-black px-2 md:px-4 py-7 md:py-5 text-sm">
            <div className="flex items-center flex-col md:flex-row">
                <Link to="/">
                    <img src={logo} alt="Glazeline" width={200} />
                </Link>
                <div className="flex flex-row items-center">
                    <p className="text-white md:ml-4 md:pl-4 md:border-l md:border-gray-500 py-2 mt-0">
                        © 2020 - {new Date().getFullYear()}
                    </p>
                    <p className="ml-2 pl-2 border-l">All Rights Reserved</p>
                </div>
                <span className="inline-flex md:ml-auto justify-center md:justify-start ">
                    Developed by -
                    <a
                        href="https://linkedin.com/in/ajaycc17"
                        target="_blank"
                        rel="noreferrer nofollow"
                        className="pl-1 font-medium"
                    >
                        Ajay Choudhury
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
