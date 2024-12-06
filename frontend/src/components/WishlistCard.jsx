import React from 'react'
import { useState } from 'react';
import { FaShare, FaBan } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WishlistCard = ({ wishlist }) => {
    const [showFullDescription, setShowFullDescrition] = useState(false);

    let description = wishlist.description;
    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }

    let iconComponent;
    let shareColor;
    if (wishlist.shared.toLowerCase() === 'private') {
        shareColor = 'text-red-500';
        iconComponent = <FaBan className='inline text-lg mb-1 mr-1' />;
    } else {
        shareColor = 'text-green-700';
        iconComponent = <FaShare className='inline text-lg mb-1 mr-1' />;
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{wishlist.type}</div>
                    <h3 className="text-xl font-bold">{wishlist.title}</h3>
                </div>

                <div className="mb-5">
                    {description}
                </div>

                <button onClick={() => setShowFullDescrition((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-60">
                    {showFullDescription ? 'Less' : 'More'}
                </button>

                <h3 className="text-indigo-500 mb-2">{wishlist.itemCount}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className={`${shareColor} mb-3`}>
                        {iconComponent}
                        {wishlist.shared}
                    </div>
                    <Link
                        to={`/wishlists duck/${wishlist.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Open
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WishlistCard;