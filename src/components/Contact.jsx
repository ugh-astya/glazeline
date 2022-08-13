import React from "react";

const Contact = () => {
    return (
        <section
            id="contact-us"
            className="fade-in body-font relative bg-gray-200"
        >
            <div className="max-w-7xl px-2 md:px-4 py-8 md:py-32 mx-auto">
                <div className="md:mb-16 mb-8">
                    <h1 className="text-2xl md:text-3xl xl:text-6xl font-medium font-vogue tracking-[0.12em] text-gray-900 text-center mb-2 md:mb-4 uppercase">
                        Have Questions?
                    </h1>
                    <p className="text-center text-lg md:text-xl ">
                        Send us a message
                    </p>
                </div>
                <div className="flex gap-6 flex-col md:flex-row">
                    <div className="w-full lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameborder="0"
                            title="map"
                            marginheight="0"
                            marginwidth="0"
                            scrolling="no"
                            src="https://maps.google.com/maps?width=936&amp;height=400&amp;hl=en&amp;q=Glazeline tiles and ceramic studio&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                        <div className="bg-gray-100/30 backdrop-blur-xl rounded-3xl relative flex flex-wrap py-6 shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="font-semibold text-gray-900 tracking-widest text-sm">
                                    ADDRESS
                                </h2>
                                <p className="mt-2 ">
                                    Shop no. 3, Patrakar Colony, Link Road no.
                                    3, Bhopal 462003, Madhya Pradesh
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className=" font-semibold text-gray-900 tracking-widest text-sm">
                                    EMAIL
                                </h2>
                                <a
                                    href="mailto:glazelinestudio@gmail.com"
                                    className="text-indigo-500 leading-relaxed lowercase"
                                >
                                    GLAZELINESTUDIO@GMAIL.COM
                                </a>
                                <h2 className="font-semibold text-gray-900 tracking-widest text-sm mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">
                                    +91-700-058-8373
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 md:w-1/2 bg-gray-300 px-6 flex flex-col md:ml-auto py-8">
                        <form
                            action="https://send.pageclip.co/7rx55FqsFgItLufNvqfRR2npLr6QbxX7/contact-form"
                            className="pageclip-form text-gray-800"
                            method="post"
                        >
                            <h2 className="text-2xl  text-gray-900 text-center mb-1">
                                Get in Touch
                            </h2>
                            <p className="text-sm text-center mb-8">
                                We are more than happy to help you!
                            </p>
                            {/* name */}
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="text-gray-800  text-sm rounded-md block w-full p-2.5 bg-gray-200 placeholder-gray-600 focus:outline-none"
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>
                            {/* email */}
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="text-gray-800  text-sm rounded-md block w-full p-2.5 bg-gray-200 placeholder-gray-600 focus:outline-none"
                                    placeholder="name@flowbite.com"
                                    required
                                />
                            </div>
                            {/* message */}
                            <label
                                htmlhtmlFor="message"
                                className="block mb-2 text-sm font-medium "
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="text-gray-800  text-sm rounded-md block w-full p-2.5 bg-gray-200 placeholder-gray-600 focus:outline-none mb-4"
                                placeholder="Leave your message..."
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-indigo-500 hover:bg-green-700 px-3 py-2 rounded-md  text-white font-semibold w-full"
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
