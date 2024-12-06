import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Wishlists from '../components/Wishlists';
import ViewAllWishlists from '../components/ViewAllWishlists';

const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <Wishlists isHome={true} / >
        <ViewAllWishlists/>
    </>
  )
}

export default HomePage