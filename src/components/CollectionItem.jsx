import React from "react";
import { Link } from "react-router-dom";

const CollectionItem = ({ image, title, description, target, alignment }) => {
    let rowReverse = "";
    let itemsEnd = "";
    if (alignment === "right") {
        rowReverse = "md:flex-row-reverse";
        itemsEnd = "items-end";
    } else {
        rowReverse = "md:flex-row";
    }

    return (
        <div className={`flex gap-12 flex-col ${rowReverse}`}>
            <img
                src={image}
                alt="Home Interior"
                className="w-full md:w-1/2 object-cover object-bottom"
            />
            <div className={`md:w-1/2 flex flex-col ${itemsEnd}`}>
                <h1 className="uppercase font-semibold text-2xl md:text-3xl tracking-widest">
                    {title}
                </h1>
                <p className="my-6 text-lg md:text-xl text-justify">
                    {description}
                </p>
                <div>
                    <Link
                        to={target}
                        className="bg-black text-white uppercase text-lg py-2 px-4"
                    >
                        Explore <i className="bi bi-arrow-right ml-2"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollectionItem;
