import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <div className="text-white body-font bg-darker">
            <div className="max-w-7xl px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src={logo} alt="" />
                </a>
                <p className="text-white font-ibm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2020 - {new Date().getFullYear()}
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start font-ibm">
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
