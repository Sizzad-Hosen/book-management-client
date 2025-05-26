import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-600">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sign up today and start buying, selling, and connecting with book lovers around the world.
            It only takes a minute to create your account.
          </p>
          <Link 
            href="/signup" 
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow hover:shadow-md"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;