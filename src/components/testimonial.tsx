import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "BookSwap has completely changed how I buy and sell books. The platform is easy to use and I've connected with so many fellow readers!",
      name: "Jessica Miller",
      role: "Book Collector"
    },
    {
      id: 2,
      quote: "As a college student, I've saved so much money buying textbooks through BookSwap. The messaging feature makes it easy to arrange meetings.",
      name: "David Chen",
      role: "Student"
    },
    {
      id: 3,
      quote: "I've been able to find rare books that I couldn't find anywhere else. The community here is incredibly helpful and passionate about reading.",
      name: "Amanda Roberts",
      role: "Book Enthusiast"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-50 sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-xl text-gray-50">Hear from book lovers who have used our platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-600 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-gray-50 mb-6 text-lg leading-relaxed">"{testimonial.quote}"</div>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-semibold text-gray-50">{testimonial.name}</p>
                <p className="text-gray-50">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;