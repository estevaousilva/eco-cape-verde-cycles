
import Layout from "@/components/Layout/Layout";
import { Bike, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Services</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Discover our range of eco-friendly cycling experiences in Cape Verde
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
                    alt="Bike rentals in Cape Verde"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="flex items-center mb-3">
                  <Bike className="h-8 w-8 text-secondary mr-2" />
                  <h2 className="text-2xl font-semibold">Bike Rentals</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Explore Cape Verde at your own pace with our high-quality bicycle rentals. We offer various types of bikes suitable for different terrains and riding styles, from comfortable city bikes to rugged mountain bikes for more challenging trails.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Daily and weekly rental options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Safety equipment included (helmets, lights)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>GPS navigation devices available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Delivery to your accommodation</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="bg-secondary hover:bg-secondary/90">Book a Rental</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                    alt="Guided bike tours in Cape Verde"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12">
                <div className="flex items-center mb-3">
                  <MapPin className="h-8 w-8 text-secondary mr-2" />
                  <h2 className="text-2xl font-semibold">Guided Bike Tours</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Join our expert local guides on carefully designed routes through Cape Verde's most beautiful natural landscapes and historically significant areas. Our guided tours offer insights into the islands' culture, history, and ecology.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Half-day, full-day and multi-day tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Expert local guides with deep knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Support vehicle for longer routes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Customizable routes for different fitness levels</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="bg-secondary hover:bg-secondary/90">Explore Tours</Button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                    alt="Community-based tourism in Cape Verde"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="flex items-center mb-3">
                  <Users className="h-8 w-8 text-secondary mr-2" />
                  <h2 className="text-2xl font-semibold">Community-Based Tourism</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Experience the authentic culture and lifestyle of Cape Verde through our community-based tourism initiatives. These experiences are designed in partnership with local communities to ensure that tourism benefits the people who call these islands home.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Traditional meals with local families</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Artisan workshops and craft demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Cultural performances and music events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Home stays in traditional Cape Verdean houses</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="bg-secondary hover:bg-secondary/90">Discover Experiences</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
