import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FaSearch } from 'react-icons/fa';

const ExploreBooks = () => {

  
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gray-500 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/images/books-bg.jpg')] bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>
      </div>
      
      {/* Content container with relative positioning */}
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-12">
          <h2 className="text-6xl p-4 font-bold text-gray-100  mb-4">Explore Our Books</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Find your next favorite read from our extensive collection of books across various genres and categories
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by title, author, or ISBN..."
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
            <button className="absolute right-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-full transition-colors duration-300">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreBooks;