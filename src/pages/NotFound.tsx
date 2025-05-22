
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! This page has cycled away</p>
          <p className="text-gray-500 max-w-md mx-auto mb-12">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
