import React from "react";
import { Waypoint } from "react-waypoint";

const Introduction = () => {
    function EntryHandle() {
        let elem = document.getElementById("intro");
        elem.classList.add("tiles-back");
        elem.classList.add("actAnim");
    }
    function LeaveHandle() {
        let elem = document.getElementById("intro");
        elem.classList.remove("tiles-back");
        elem.classList.remove("actAnim");
    }
    return (
        <Waypoint onEnter={EntryHandle} onLeave={LeaveHandle} bottomOffset="1%">
            <div
                id="intro"
                className="bg-gray-100 flex items-center justify-center px-8 md:px-4 py-20 md:py-28"
            >
                <div className="max-w-4xl flex flex-col gap-16">
                    {/* first part */}
                    <div className="text-justify">
                        <h2 className="font-hero text-2xl md:text-3xl font-medium">
                            Great design is a solution to a problem
                        </h2>
                        <p className="mt-6 text-lg md:text-xl">
                            With 20+ years of experience in the field and our
                            offline showroom at Bhopal, we provide the solution
                            to all your home renovation and tiling needs.
                        </p>
                    </div>
                    {/* second part */}
                    <div className="text-justify">
                        <h2 className="font-hero text-2xl md:text-3xl font-medium">
                            With Glazeline, you can design your perfect space
                        </h2>
                        <p className="mt-6 text-lg md:text-xl">
                            We understand the importance of living spaces. We
                            want these spaces to be not only functional but also
                            beautiful.
                        </p>
                        <p className="mt-4 text-lg md:text-xl">
                            That's why we offer a wide range of wall and floor
                            tiles to create a décor that is as unique as you
                            are. From our exclusive designer tiles to more
                            classic designs, we have something for everyone- any
                            budget.
                        </p>
                        <p className="mt-4 text-lg md:text-xl">
                            If your home needs a remodelling, try our interior
                            design services. We gauge your needs and tastes to
                            deliver custom-designed pieces to fit your vision.
                            Be it the latest modular kitchen design, TV unit
                            design, master/kids' bedroom renovations or living
                            room interiors- we do it all.
                        </p>
                        <p className="mt-4 text-lg md:text-xl">
                            Just drop us a call at{" "}
                            <a
                                href="tel:+917000588373"
                                className="font-semibold"
                            >
                                +91-700-058-8373
                            </a>{" "}
                            or message us on{" "}
                            <a
                                href="https://api.whatsapp.com/send?phone=917000588373"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 px-2 py-0.5 rounded"
                            >
                                <i class="bi bi-whatsapp mr-1"></i>WhatsApp
                            </a>{" "}
                            to book a consultation session today.
                        </p>
                        <p className="mt-4 text-lg md:text-xl">
                            Or feel free to walk into our exclusive showroom at
                            <a
                                href="https://goo.gl/maps/eo733vbdys2tmkTw8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-800 font-semibold"
                            >
                                {" "}
                                Shop no. 3, Patrakar Colony, Bhopal{" "}
                            </a>{" "}
                            between 11 AM to 8:30 PM, Tuesday to Sunday.
                        </p>
                    </div>
                </div>
            </div>
        </Waypoint>
    );
};

export default Introduction;
