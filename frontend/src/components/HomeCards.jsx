import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card'
const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Top Wishes</h2>
                <p className="mt-2 mb-4">
                See the top 10 most popular wishes from our users
                </p>
                <Link
                to="/wishlists"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                >
                Show Me
                </Link>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className="text-2xl font-bold">For Parents</h2>
            <p className="mt-2 mb-4">
            Discover the benefits of using Wishlisty to manage your family's holiday wishlists.
            </p>
            <Link
            to="/add-wishlist"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
            Parent Portal
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards