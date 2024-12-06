import React from 'react'
import wishlistsData from '../wishlists.json'; // we will need to update this to pull from the backend API
import WishlistCard from './WishlistCard';

const Wishlists = ({ isHome = false }) => {
  const wishlistItems = isHome ? wishlistsData.slice(0, 3) : wishlistsData;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Wishlists' : 'Browse Wishlists'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlistItems.map((wishlist) => (
            <WishlistCard key={wishlist.id} wishlist={wishlist} />
          ))}

        </div>
      </div>
    </section>
  )
}

export default Wishlists