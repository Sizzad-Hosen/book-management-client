'use client';
import { useState, useEffect } from 'react';

const banners = [
  {
    title: 'Discover, Buy & Sell Books',
    description: 'Join our community of book lovers where you can buy, sell, and connect with fellow bibliophiles',
    image: 'https://cdn.pixabay.com/photo/2017/08/06/15/16/book-2593398_960_720.jpg',
  },
  {
    title: 'Empower Readers Everywhere',
    description: 'Find rare gems, connect with collectors, and fuel your reading passion.',
    image: 'https://cdn.pixabay.com/photo/2017/07/02/09/03/books-2463779_960_720.jpg',
  },
  {
    title: 'Earn from Your Books',
    description: 'List your used books and make space for new adventures.',
    image: 'https://cdn.pixabay.com/photo/2022/08/09/13/11/ireland-7374959_640.jpg',
  },
  {
    title: 'Explore Vast Categories',
    description: 'From classics to coding, discover books in every genre.',
    image: 'https://cdn.pixabay.com/photo/2015/09/10/09/50/library-934285_640.jpg',
  },
  {
    title: 'Book Deals Daily',
    description: 'Catch exciting deals and discounts on popular titles.',
    image: 'https://cdn.pixabay.com/photo/2016/11/21/12/39/architecture-1845144_960_720.jpg',
  },
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentIndex];

  return (
    <div
      className="w-full h-100 bg-center bg-no-repeat  bg-cover flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${currentBanner.image})`,
      }}
    >
      <div className="bg-black/50 p-8 rounded-lg text-center text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentBanner.title}</h1>
        <p className="text-lg md:text-xl mb-6">{currentBanner.description}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-full">
            Browse Books
          </button>
          <button className="border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold py-2 px-6 rounded-full">
            Sell Your Books
          </button>
        </div>
      </div>
    </div>
  );
}
