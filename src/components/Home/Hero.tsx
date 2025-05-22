
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')", 
          filter: "brightness(0.65)" 
        }}
      />
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Cape Verde by Bike
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 font-light">
            Sustainable and Healthy Tourism
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Experience unique adventures with a positive impact on the environment and local communities.
          </p>
          <Link to="/services">
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-6 text-lg rounded-md">
              Explore Our Tours
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
