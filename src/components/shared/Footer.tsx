'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* BookSwap */}
        <div>
          <h3 className="font-bold text-lg mb-3">BookSwap</h3>
          <div className="w-10 h-1 bg-purple-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* For Users */}
        <div>
          <h3 className="font-bold text-lg mb-3">For Users</h3>
          <div className="w-10 h-1 bg-purple-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Sell Books</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg mb-3">Resources</h3>
          <div className="w-10 h-1 bg-purple-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community Guidelines</a></li>
            <li><a href="#">Safety Tips</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-lg mb-3">Legal</h3>
          <div className="w-10 h-1 bg-purple-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Copyright Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5 my-6">
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition">
          <FaTwitter />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition">
          <FaInstagram />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition">
          <FaPinterestP />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400">
        © 2023 BookSwap. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
