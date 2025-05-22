
import { Bike, Map, Users } from "lucide-react";

const features = [
  {
    icon: <Bike className="h-10 w-10 text-secondary" />,
    title: "Eco-Friendly Adventures",
    description: "Discover Cape Verde's beauty with zero emissions and maximum enjoyment."
  },
  {
    icon: <Map className="h-10 w-10 text-secondary" />,
    title: "Breathtaking Routes",
    description: "Carefully selected paths through unique landscapes and hidden gems."
  },
  {
    icon: <Users className="h-10 w-10 text-secondary" />,
    title: "Community Connection",
    description: "Support local communities and experience authentic Cape Verdean culture."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Cycling Tourism</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our sustainable approach to tourism creates memorable experiences while preserving the natural beauty of Cape Verde.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
