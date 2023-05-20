import React from "react";

const Introduction = () => {
    return (
        <div className="fade-in bg-gray-100 flex items-center justify-center px-2 md:px-4 py-20 md:py-28">
            <div className="max-w-4xl flex flex-col gap-16">
                {/* first part */}
                <div className="text-justify">
                    <h2 className="font-hero text-2xl md:text-3xl font-medium">
                        Great design is a solution to a problem
                    </h2>
                    <p className="mt-6 text-lg md:text-xl">
                        With 20+ years of experience in the field and our
                        offline showroom at Patrakar Colony, Bhopal, we provide
                        the solution to all your home renovation and tiling
                        needs.
                    </p>
                </div>
                {/* second part */}
                <div className="text-justify">
                    <h2 className="font-hero text-2xl md:text-3xl font-medium">
                        With Glazeline, you can design your perfect space
                    </h2>
                    <p className="mt-6 text-lg md:text-xl">
                        We understand the importance of living spaces. We want
                        these spaces to be not only functional but also
                        beautiful.
                    </p>
                    <p className="mt-4 text-lg md:text-xl">
                        That's why we offer a wide range of wall and floor tiles
                        to create a décor that is as unique as you are. From our
                        exclusive designer tiles to more classic designs, we
                        have something for everyone- any budget.
                    </p>
                    <p className="mt-4 text-lg md:text-xl">
                        We also provide interior design services on a budget. We
                        gauge your needs and tastes to deliver custom-designed
                        pieces to fit your vision. Be it the latest modular
                        kitchen design, TV unit design, master/kids' bedroom
                        renovations or living room interiors- we do it all.{" "}
                    </p>
                    <p className="mt-4 text-lg md:text-xl">
                        Just drop us a call at{" "}
                        <span className="font-semibold">+91-700-058-8373</span>{" "}
                        to book a consultation session today.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
