
import Layout from "@/components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">About Us</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Promoting sustainable tourism and authentic experiences through cycling in Cape Verde.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="mb-4 text-gray-700">
                Cycling CV Tourism is dedicated to promoting sustainable tourism through environmentally-friendly bicycle tours across the beautiful Cape Verde islands. We aim to provide unique adventures that have a positive impact on both the environment and the local communities.
              </p>
              <p className="mb-4 text-gray-700">
                By choosing bicycles as our primary mode of transportation, we minimize our carbon footprint while maximizing the connection between our visitors and the stunning landscapes of Cape Verde.
              </p>
              <p className="text-gray-700">
                We believe that sustainable tourism is not just about protecting the environment, but also about supporting local economies and preserving cultural heritage.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                  alt="Cape Verde Landscape" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-primary">Well-being</h3>
              <p className="text-gray-700">
                Promoting physical and mental health through active exploration and connection with nature.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-primary">Ecology</h3>
              <p className="text-gray-700">
                Minimizing environmental impact and raising awareness about ecological preservation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-primary">Local Partnerships</h3>
              <p className="text-gray-700">
                Working with local businesses and communities to ensure tourism benefits the people of Cape Verde.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-primary">Responsible Tourism</h3>
              <p className="text-gray-700">
                Encouraging respectful cultural exchange and sustainable travel practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-white font-medium italic max-w-3xl mx-auto">
            "To ride is to care – for yourself, for others, and for the planet."
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default About;
