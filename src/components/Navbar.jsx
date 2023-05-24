import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/glazeline_logo.svg";
import { Routes, Route, useNavigate } from "react-router-dom";

const Navbar = () => {
    function showMenu() {
        let elem = document.getElementById("mobile-menu");
        if (elem.classList.contains("hidden")) {
            elem.classList.remove("hidden");
        } else {
            elem.classList.add("hidden");
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
                        <ul className="flex items-center gap-12 font-semibold">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/catalogue/wall">Catalogue</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About</Link>
                            </li>
                            <li>
                                <Link to="/#contact">Contact</Link>
                            </li>
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send?phone=917000588373"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="cssbuttons-io">
                                        <span>
                                            <i class="bi bi-whatsapp mr-2"></i>
                                            Message
                                        </span>
                                    </button>
                                </a>
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
                            <Link to="/catalogue/wall">Catalogue</Link>
                            <i class="bi bi-chevron-right"></i>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                            <Link to="/about-us">About</Link>
                            <i class="bi bi-chevron-right"></i>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-600 pb-2">
                            <Link to="/#contact">Contact</Link>
                            <i class="bi bi-chevron-right"></i>
                        </li>
                        <li className="flex justify-between items-center">
                            <a
                                href="https://api.whatsapp.com/send?phone=917000588373"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i class="bi bi-whatsapp mr-2"></i>Message
                            </a>
                            <i class="bi bi-chevron-right"></i>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
