import React from "react";
import CollectionItem from "./CollectionItem";

// import images
import coll1 from "../assets/collection/wall.png";
import coll2 from "../assets/collection/wood.png";
import coll3 from "../assets/collection/floor.png";
import coll4 from "../assets/collection/commercial.png";
import coll5 from "../assets/collection/bathroom.webp";

const Collection = () => {
    return (
        <section className="fade-in px-8 md:px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto">
                <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 mb-8 md:mb-12">
                    <p className="text-lg md:text-xl">
                        From wall tiles to commercial space design, from wood
                        flooring to kitchen backsplash - We've got it all!
                    </p>
                    <p className="text-lg md:text-xl">
                        Visit us at Bhopal to go through
                    </p>
                    <h2 className="uppercase text-4xl md:text-5xl lg:text-6xl pt-4 font-medium font-vogue tracking-wider">
                        Our Collection
                    </h2>
                </div>
                {/* collections */}
                <div className="flex flex-col gap-12">
                    <CollectionItem
                        image={coll1}
                        id="wall"
                        title="Wall Tiles"
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
                        image={coll2}
                        id="wood"
                        title="Wood Flooring"
                        alignment="right"
                        description="Return to nature with a high-quality wood or a
                        classic rustic finish wood flooring. Built for all
                        seasons, our SPC wood flooring solutions are
                        durable, water-resistant, scratch-proof and
                        eco-friendly. With a variety of colours and styles,
                        no two floors will be the same."
                    />
                    <CollectionItem
                        image={coll3}
                        id="floor"
                        title="Floor Tiles"
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
                        image={coll4}
                        id="comm"
                        title="Commercial Spaces"
                        alignment="right"
                        description="Tiles perfect for commercial spaces- tech offices or
                        corporate lobbies, that are durable and modern. With
                        a wide selection of styles, whether you want marble,
                        stone or concrete-finish tiles, we have an option
                        for you."
                    />
                    <CollectionItem
                        image={coll5}
                        id="bathroom"
                        title="Bathroom Fittings"
                        alignment="left"
                        description="Our exquisite bathroom fittings collection available in an array of captivating colors, including rose gold, chrome, and matte black, our fittings elevate your bathroom aesthetic to new heights. Experience the tranquility of our silent and eco-friendly commodes, while our selection of styles ensures there's a design to suit every taste."
                    />
                </div>
            </div>
        </section>
    );
};

export default Collection;
