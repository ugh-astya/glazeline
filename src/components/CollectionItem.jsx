import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const CollectionItem = ({ id, image, title, description, alignment }) => {
    let rowReverse = "";
    let itemsEnd = "";
    if (alignment === "right") {
        rowReverse = "md:flex-row-reverse";
        itemsEnd = "md:items-end";
    } else {
        rowReverse = "md:flex-row";
    }
    return (
        <div className={`flex gap-12 flex-col ${rowReverse}`}>
            <Link to={`/catalogue/${id}`} className="md:w-1/2 w-full">
                <img
                    src={image}
                    alt={`${id} tiles`}
                    className="object-cover object-bottom hover:scale-110 transition-transform duration-300"
                />
            </Link>
            <div className={`md:w-1/2 flex flex-col ${itemsEnd}`}>
                <h2 className="uppercase font-semibold text-2xl tracking-widest">
                    {title}
                </h2>
                <p className="pt-2 text-lg text-justify lineHeight145rem">
                    {description}
                </p>
                <div className="mt-5">
                    <Link to={`/catalogue/${id}`}>
                        <button className="btn">
                            <span className="flex items-center">
                                Explore <BsArrowRight className="ml-2" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollectionItem;
