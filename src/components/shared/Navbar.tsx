'use client';

import { useState } from 'react';
import { FaSearch, FaEnvelope, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';

export const Navbar = ()=> {
  const [menuOpen, setMenuOpen] = useState(false);

const navlinks = (
  <>
    <Link href="/" className="hover:text-gray-200">Home</Link>
    <Link href="/books" className="hover:text-gray-200">Books</Link>
    <Link href="/categories" className="hover:text-gray-200">Categories</Link>
    <Link href="/sell" className="hover:text-gray-200">Sell</Link>
    <Link href="/message" className="hover:text-gray-200">Messages</Link>
    <Link href="/about" className="hover:text-gray-200">About Us</Link>
    <Link href="/login" className="hover:text-gray-200">Login</Link>
    <Link href="/register" className="hover:text-gray-200">Register</Link>
    
    
    
  
  </>
);
  return (
    <nav className="bg-gray-900 text-white w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex  hover:text-gray-800 items-center gap-2 text-2xl font-bold">
            <span>📚</span>
            <Link href="/" className="text-white text-3xl  font-bold">BookSwap</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
          {navlinks}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
                 <input
            type="text"
            placeholder="Search books..."
            className="w-full px-4 py-1 rounded-full text-gray-900 bg-white border border-gray-300 text-sm placeholder-gray-500"
          />


              <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
            </div>
              <Link href="/dashboard" className="">
    
            <MdDashboard className="hover:text-gray-200 cursor-pointer hidden md:block" />
              </Link>

            <FaShoppingCart className="hover:text-gray-200 cursor-pointer hidden md:block" />
            <FaUser className="hover:text-gray-200 cursor-pointer hidden md:block" />

            {/* Hamburger Menu */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-3">
           {navlinks}
            <div className="mt-2 relative">
              <input
            type="text"
            placeholder="Search books..."
            className="w-full px-4 py-1 rounded-full text-white  bg-white border border-gray-300 text-sm placeholder-gray-500"
          />


              <FaSearch className="absolute right-4 top-2.5 text-gray-500" />
            </div>
            <div className="flex justify-around text-xl mt-2">
              <FaEnvelope className="hover:text-gray-200 cursor-pointer" />
              <FaShoppingCart className="hover:text-gray-200 cursor-pointer" />
              <FaUser className="hover:text-gray-200 cursor-pointer" />
          
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}