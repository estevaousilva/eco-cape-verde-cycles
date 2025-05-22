
const testimonials = [
  {
    quote: "An unforgettable experience that allowed me to see Cape Verde from a completely new perspective.",
    author: "Maria S.",
    location: "Germany"
  },
  {
    quote: "The best way to explore the islands. The guides were knowledgeable and the impact on local communities was evident.",
    author: "John D.",
    location: "United Kingdom"
  },
  {
    quote: "I felt connected to the landscape in a way that wouldn't have been possible with any other form of transportation.",
    author: "Sophie L.",
    location: "France"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">What Our Cyclists Say</h2>
          <p className="mt-4 text-gray-600">
            Experiences from our community of eco-conscious explorers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="mb-4 text-tertiary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H6C3.79086 11 2 12.7909 2 15V16C2 18.2091 3.79086 20 6 20H7C9.20914 20 11 18.2091 11 16V15C11 12.7909 9.20914 11 7 11H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 11H18C15.7909 11 14 12.7909 14 15V16C14 18.2091 15.7909 20 18 20H19C21.2091 20 23 18.2091 23 16V15C23 12.7909 21.2091 11 19 11H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 11V6C6 5.44772 6.44772 5 7 5H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18 11V6C18 5.44772 18.4477 5 19 5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              <div className="flex flex-col">
                <span className="font-medium text-gray-800">{testimonial.author}</span>
                <span className="text-sm text-gray-500">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
