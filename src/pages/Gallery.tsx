
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Image } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Cape Verde landscapes",
    category: "landscapes"
  },
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Cycling through valleys",
    category: "cycling"
  },
  {
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    alt: "Mountain trails",
    category: "landscapes"
  },
  {
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Forest cycling routes",
    category: "cycling"
  },
  {
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Sunset in Cape Verde",
    category: "landscapes"
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Mountain views",
    category: "landscapes"
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    alt: "Aerial view of Cape Verde",
    category: "landscapes"
  },
  {
    src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    alt: "Cycling group tour",
    category: "cycling"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const filteredImages = filter 
    ? images.filter(img => img.category === filter)
    : images;

  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Gallery</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Explore the beauty of Cape Verde through our cycling adventures
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
              <button 
                onClick={() => setFilter(null)}
                className={`px-4 py-2 rounded-md transition-colors ${filter === null ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('landscapes')}
                className={`px-4 py-2 rounded-md transition-colors ${filter === 'landscapes' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                Landscapes
              </button>
              <button 
                onClick={() => setFilter('cycling')}
                className={`px-4 py-2 rounded-md transition-colors ${filter === 'cycling' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                Cycling
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group"
                onClick={() => openImage(image.src)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                  <Image className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-auto rounded-lg"
              onClick={() => closeImage()}
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
