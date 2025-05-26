import React from 'react';
import Link from 'next/link';
import {
  BookOpenIcon,
  AcademicCapIcon,
  ClockIcon,
  UserIcon,
  HeartIcon,
  PuzzlePieceIcon, // Corrected icon name
  RocketLaunchIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const BrowseCategories = () => {
  const categories = [
    { name: "Fiction", count: 457, icon: BookOpenIcon },
    { name: "Science", count: 299, icon: AcademicCapIcon },
    { name: "History", count: 335, icon: ClockIcon },
    { name: "Biography", count: 178, icon: UserIcon },
    { name: "Romance", count: 492, icon: HeartIcon },
    { name: "Self-Help", count: 196, icon: PuzzlePieceIcon }, // Updated here
    { name: "Sci-Fi", count: 245, icon: RocketLaunchIcon },
    { name: "Mystery", count: 321, icon: MagnifyingGlassIcon },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-indigo-700 sm:text-5xl">Browse Categories</h2>
          <p className="mt-4 text-xl text-gray-600">Find books by your favorite genre or subject</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link 
                key={index}
                href={`/categories/${category.name.toLowerCase().replace(' ', '-')}`}
                className="group bg-indigo-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-indigo-50 group-hover:bg-indigo-100 mb-4 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-indigo-600 group-hover:text-indigo-700" />
                </div>
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                <p className="text-white mt-2">{category.count} Books</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;