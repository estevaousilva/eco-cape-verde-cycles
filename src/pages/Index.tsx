
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Testimonials from "@/components/Home/Testimonials";
import CallToAction from "@/components/Home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
