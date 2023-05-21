import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/glazeline_logo.svg";

const Navbar = () => {
    function showMenu() {
        let elem = document.getElementById("mobile-menu");
        if (elem.classList.contains("hidden")) {
            elem.classList.remove("hidden");
        } else {
            elem.classList.add("hidden");
        }
    }
    // window.onscroll = function () {
    //     scrollFunction();
    // };

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
        <>
            <header className="text-white bg-black sticky top-0 z-40 px-4 md:px-8 py-4">
                <div className="flex items-center justify-between gap-6">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Glazeline"
                            width={260}
                            // className="invert"
                        />
                    </Link>
                    <nav className="hidden lg:block uppercase">
                        <ul className="flex gap-12 font-medium">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/catalogue">Catalogue</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="border border-white hover:border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:font-semibold py-2 px-4"
                                >
                                    Get a Quote
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <i
                        class="bi bi-list text-3xl lg:hidden"
                        onClick={showMenu}
                    ></i>
                </div>
            </header>
            <div
                id="mobile-menu"
                className="hidden fade-in fixed w-full backdrop-blur-md bg-black/90 text-gray-200 z-50"
            >
                <nav className="p-4">
                    <ul className="text-lg flex flex-col justify-between gap-2 font-medium">
                        <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                            <Link to="/">Home</Link>
                            <i class="bi bi-chevron-right"></i>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                            <Link to="/catalogue">Catalogue</Link>
                            <i class="bi bi-chevron-right"></i>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                            <Link to="/about-us">About</Link>
                            <i class="bi bi-chevron-right"></i>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                            <Link to="/contact">Contact</Link>
                            <i class="bi bi-chevron-right"></i>
                        </li>
                        <li className="flex justify-between items-center">
                            <Link to="/">Get a Quote</Link>
                            <i class="bi bi-chevron-right"></i>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
