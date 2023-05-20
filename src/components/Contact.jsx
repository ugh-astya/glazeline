import React from "react";

const Contact = () => {
    return (
        <section
            id="contact-us"
            className="fade-in relative bg-gray-100 flex justify-center items-center px-2 md:px-4 py-20 md:py-28"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-4 mb-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-vogue tracking-wider text-center uppercase">
                        Have Questions?
                    </h1>
                    <p className="text-center text-lg md:text-xl ">
                        Send us a message
                    </p>
                </div>
                <div className="flex gap-6 flex-col md:flex-row">
                    <div className="w-full lg:w-2/3 md:w-1/2 bg-gray-300 border-2 overflow-hidden p-10 flex items-end justify-start relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6216814988784!2d77.40882017521773!3d23.22045397903551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4392a23a3be1%3A0x655ffbcacd81e9ab!2sGlazeline%20Tiles%20and%20Ceramic%20Studio!5e0!3m2!1sen!2sin!4v1684520449733!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="bg-gray-100/30 backdrop-blur-xl rounded-3xl relative flex flex-wrap py-6 shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="font-semibold tracking-widest text-sm">
                                    ADDRESS
                                </h2>
                                <p className="mt-2">
                                    Shop no. 3, Patrakar Colony, Link Road no.
                                    3, Bhopal 462003, Madhya Pradesh
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className=" font-semibold tracking-widest text-sm">
                                    EMAIL
                                </h2>
                                <a
                                    href="mailto:glazelinestudio@gmail.com"
                                    className="text-blue-800 leading-relaxed tracking-wide lowercase font-semibold"
                                >
                                    GLAZELINESTUDIO@GMAIL.COM
                                </a>
                                <h2 className="font-semibold tracking-widest text-sm mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed font-semibold text-blue-800">
                                    +91-700-058-8373
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 md:w-1/2 bg-white px-6 flex flex-col md:ml-auto py-8 shadow-lg">
                        <form
                            action="https://send.pageclip.co/7rx55FqsFgItLufNvqfRR2npLr6QbxX7/contact-form"
                            className="pageclip-form"
                            method="post"
                        >
                            <h2 className="text-2xl font-semibold text-center mb-1">
                                Get in Touch
                            </h2>
                            <p className="text-center mb-4">
                                We are more than happy to help you!
                            </p>
                            {/* name */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    id="name"
                                    className="block w-full p-2.5 border border-black placeholder-gray-600 focus:outline-none"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            {/* email */}
                            <div className="mb-6">
                                <input
                                    type="email"
                                    id="email"
                                    className="block w-full p-2.5 border border-black placeholder-gray-600 focus:outline-none"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            {/* message */}
                            <textarea
                                id="message"
                                rows="4"
                                className="block w-full p-2.5 border border-black placeholder-gray-600 focus:outline-none mb-4"
                                placeholder="Leave your message..."
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-black text-white px-3 py-2 font-semibold w-full"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
