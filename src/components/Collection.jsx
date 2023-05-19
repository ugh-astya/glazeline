import React from "react";
import abt1 from "../assets/old/2.png";
import abt2 from "../assets/old/3.png";
import abt3 from "../assets/old/5.jpg";
import abt4 from "../assets/old/6.jpg";
import CollectionItem from "./CollectionItem";

const Collection = () => {
    return (
        <section className="fade-in px-2 md:px-4 py-28">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 mb-8">
                    <p className="text-lg md:text-xl">
                        From wall tiles to commercial space design, from wood
                        flooring to kitchen backsplash - We've got it all!
                    </p>
                    <p className="text-lg md:text-xl">
                        Visit us at Bhopal to go through
                    </p>
                    <h2 className="uppercase text-2xl md:text-3xl xl:text-6xl pt-4 font-medium font-vogue tracking-wider">
                        Our Collection
                    </h2>
                </div>
                {/* collections */}
                <div className="flex flex-col gap-16">
                    <CollectionItem
                        image={abt1}
                        title="Wall Tiles"
                        target="/"
                        alignment="left"
                        description="Set of high-quality wall tiles that fit any design,
                            colour-scheme and budget. Customize your bathroom,
                            bedroom or kitchen with a touch of your personal
                            style. With designer tiles in a wide range of
                            finishes- stone, matte, glossy, rustic and
                            wallpaper-look, there's something to choose for
                            everyone."
                    />
                    <CollectionItem
                        image={abt2}
                        title="Wood Flooring"
                        target="/"
                        alignment="right"
                        description="Return to nature with a high-quality wood or a
                        classic rustic finish wood flooring. Built for all
                        seasons, our SPC wood flooring solutions are
                        durable, water-resistant, scratch-proof and
                        eco-friendly. With a variety of colours and styles,
                        no two floors will be the same."
                    />
                    <CollectionItem
                        image={abt3}
                        title="Floor Tiles"
                        target="/"
                        alignment="left"
                        description="We have an extensive selection of floor tiles,
                        Italian marble, carvings, matte-finish and
                        scratch-proof flooring solutions suitable for a wide
                        range of residential and commercial projects. We
                        carry a variety of sizes and shapes for indoor and
                        outdoor spaces including bathroom tiles that are
                        slip-resistant and carpet-flooring."
                    />
                    <CollectionItem
                        image={abt4}
                        title="Commercial Spaces"
                        target="/"
                        alignment="right"
                        description="Tiles perfect for commercial spaces- tech offices or
                        corporate lobbies, that are durable and modern. With
                        a wide selection of styles, whether you want marble,
                        stone or concrete-finish tiles, we have an option
                        for you."
                    />
                </div>
            </div>
        </section>
    );
};

export default Collection;
