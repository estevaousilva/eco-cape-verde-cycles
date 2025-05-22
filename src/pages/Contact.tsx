
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default"
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Reach out for more information about our cycling tours and services
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-primary hover:bg-primary/90 w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="mb-8 space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>+238 999 9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>info@cyclingcv.com</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://wa.me/238999999" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 15.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4">Our Location</h3>
              
              <div className="rounded-lg overflow-hidden h-64 mb-6 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977377.7293109602!2d-24.5575046625!3d16.0249330495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9358e81a1c34e145%3A0x5d04a328e25db2bd!2sCape%20Verde!5e0!3m2!1sen!2sus!4v1653562061619!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Map of Cape Verde"
                />
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-medium mb-2">Visit Our Office</h4>
                <p className="text-gray-700">
                  Main Street, Mindelo<br />
                  São Vicente, Cape Verde<br />
                  Open Monday - Friday, 9am - 5pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
