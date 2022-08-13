import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
    function showNav() {
        let elem = document.getElementById("navBar");
        let eleme2 = document.getElementById("navLine");
        if (elem.classList.contains("hidden")) {
            elem.classList.remove("hidden");
            eleme2.classList.add("border-b-2");
        } else {
            elem.classList.add("hidden");
            eleme2.classList.remove("border-b-2");
        }
    }
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            (document.body.scrollTop > 60 ||
                document.documentElement.scrollTop > 60) &&
            document.documentElement.scrollWidth > 767.99
        ) {
            document.getElementById("nav1").classList.remove("md:flex");
            document.getElementById("nav2").classList.remove("md:hidden");
        } else if (document.documentElement.scrollWidth > 767.99) {
            document.getElementById("nav1").classList.add("md:flex");
            document.getElementById("nav2").classList.add("md:hidden");
        }
    }
    return (
        <header className="body-font text-white bg-black fixed w-full top-0 z-50">
            <div
                id="nav1"
                className="hidden fade-in max-w-7xl mx-auto md:flex flex-col py-3 items-center justify-center"
            >
                <Link
                    to="/"
                    className="flex title-font font-medium items-center mb-0.5"
                >
                    <img src={logo} alt="GlazeLine" width={450} />
                </Link>
                <div className="flex">
                    <nav className="md:ml-auto flex flex-wrap items-center  font-medium">
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
                            to="/about-us/"
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
            {/* on scroll navbar */}
            <div
                id="nav2"
                className="md:hidden w-full z-50 bg-black body-font text-white"
            >
                <div className="fade-in justify-between px-0 md:px-4 flex flex-wrap pt-2 md:py-4 pb-0 flex-col md:flex-row">
                    <div
                        id="navLine"
                        className="md:mr-8 flex items-center justify-between pb-2 md:pb-0 md:px-0 px-2 md:border-none border-dashed border-gray-700"
                    >
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo1}
                                alt="Glazeline"
                                width={400}
                                className="mr-1"
                            />
                        </Link>
                        <i
                            className="md:hidden bi bi-list text-3xl cursor-pointer"
                            onClick={showNav}
                        ></i>
                    </div>

                    <div
                        id="navBar"
                        className="fade-in hidden md:flex md:items-center md:justify-end"
                    >
                        <nav className="md:text-lg md:ml-auto flex md:flex-row flex-col items-center font-medium px-2">
                            <Link
                                to="/"
                                className="md:mr-10 md:border-b-2 md:border-black md:hover:border-white md:pb-0.5 flex justify-between w-full md:w-auto py-2 border-b border-gray-700"
                            >
                                <span>Home</span>
                                <i className="bi bi-chevron-right md:hidden"></i>
                            </Link>
                            <Link
                                to="/catalogue/"
                                className="md:mr-10 md:border-b-2 md:border-black md:hover:border-white md:pb-0.5 flex justify-between w-full md:w-auto py-2 border-b border-gray-700"
                            >
                                Catalogue
                                <i className="bi bi-chevron-right md:hidden"></i>
                            </Link>
                            <Link
                                to="/about-us/"
                                className="md:mr-10 md:border-b-2 md:border-black md:hover:border-white md:pb-0.5 flex justify-between w-full md:w-auto py-2 border-b border-gray-700"
                            >
                                About
                                <i className="bi bi-chevron-right md:hidden"></i>
                            </Link>
                            <Link
                                to="#contact-us"
                                className="md:border-b-2 border-black md:hover:border-white md:pb-0.5 flex justify-between w-full md:w-auto py-2"
                            >
                                Contact Us
                                <i className="bi bi-chevron-right md:hidden"></i>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
