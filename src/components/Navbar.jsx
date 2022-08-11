import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <header className="body-font text-white bg-black fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto flex flex-col py-3 items-center justify-center">
                <Link
                    to="/"
                    className="flex title-font font-medium items-center mb-0.5"
                >
                    <img src={logo} alt="GlazeLine" width={300} />
                </Link>
                <div className="flex">
                    <nav className="md:ml-auto flex flex-wrap items-center font-ibm font-medium">
                        <Link
                            to="/"
                            className="mr-10 border-b-2 border-black hover:border-white pb-0.5"
                        >
                            Home
                        </Link>
                        <Link
                            to="/catalogue/"
                            className="mr-10 border-b-2 border-black hover:border-white pb-0.5"
                        >
                            Catalogue
                        </Link>
                        <Link
                            to="/about/"
                            className="mr-10 border-b-2 border-black hover:border-white pb-0.5"
                        >
                            About
                        </Link>
                        <Link
                            to="#contact-us"
                            className="border-b-2 border-black hover:border-white pb-0.5"
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
