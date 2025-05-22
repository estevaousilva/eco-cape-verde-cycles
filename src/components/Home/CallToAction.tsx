
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Ready to Experience Cape Verde on Two Wheels?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Join us for an adventure that combines the thrill of cycling with the beauty of Cape Verde's landscapes while supporting local communities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/services">
            <Button className="bg-white text-primary hover:bg-gray-100">
              View Our Tours
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
