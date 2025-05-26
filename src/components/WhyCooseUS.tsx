import React from 'react';
import {
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Easy Book Exchange",
      description: "Buy and sell books with ease through our simple and secure platform.",
      icon: ArrowPathIcon
    },
    {
      title: "Direct Messaging",
      description: "Connect directly with sellers and buyers through our built-in messaging system.",
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: "Secure Transactions",
      description: "Our platform ensures all transactions are safe and secure for all users.",
      icon: ShieldCheckIcon
    },
    {
      title: "Best Prices",
      description: "Find books at competitive prices or set your own when selling.",
      icon: CurrencyDollarIcon
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose BookSwap</h2>
          <p className="mt-4 text-xl text-gray-600">
            Our platform offers unique features designed to provide the best experience for book lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-indigo-50 mb-6">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;