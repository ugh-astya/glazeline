import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/glazeline_logo.svg";

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
        <header className="text-white bg-black sticky top-0 z-50 px-2 md:px-4 py-3">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Glazeline"
                        width={260}
                        // className="invert"
                    />
                </Link>
                <nav>
                    <ul className="text-lg flex gap-12 font-medium">
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
                                className="border border-white hover:border-gray-300 hover:bg-gray-300 text-white hover:text-black hover:font-semibold text-base py-2 px-4"
                            >
                                Get a Quote
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
