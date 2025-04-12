"use client";

import { ShoppingCart, Star, Leaf, Heart, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useCart } from "./context/CartContext";
import { Navbar } from "./components/Navbar";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const bottleImages = [
  "https://5.imimg.com/data5/WU/LZ/AS/SELLER-10548266/il-794xn-2037362263-19qm-500x500.jpg",
  "https://5.imimg.com/data5/WU/LZ/AS/SELLER-10548266/il-794xn-2037362263-19qm-500x500.jpg",
  "https://5.imimg.com/data5/WU/LZ/AS/SELLER-10548266/il-794xn-2037362263-19qm-500x500.jpg",
  "https://5.imimg.com/data5/WU/LZ/AS/SELLER-10548266/il-794xn-2037362263-19qm-500x500.jpg",
  "https://5.imimg.com/data5/WU/LZ/AS/SELLER-10548266/il-794xn-2037362263-19qm-500x500.jpg"
];

export default function Home() {
  const { dispatch } = useCart();

  const handleAddToCart = (product: any) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden pt-20 px-4">
        <div className="absolute inset-0">
          {bottleImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.2, rotate: index * 45 }}
              animate={{ opacity: 0.05, scale: 1, rotate: index * 45 }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              className="absolute w-full md:w-1/2 h-1/2 bg-cover bg-center transform"
              style={{
                backgroundImage: `url(${image})`,
                top: `${Math.sin(index) * 30}%`,
                left: `${Math.cos(index) * 30}%`
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-orange-50/50 backdrop-blur-sm" />
        </div>

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-amber-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative py-6 flex flex-col items-center">
              <div className="w-full flex justify-center items-center mb-2">
                <hr className="w-1/4 border-amber-800" />
                <div className="mx-4 text-amber-900">
                  <svg className="w-6 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,1L8,5H16L12,1M8,19H16L12,23L8,19M19,8V16L23,12L19,8M1,8L5,12L1,16V8M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />
                  </svg>
                </div>
                <hr className="w-1/4 border-amber-800" />
              </div>

              <h1 className="text-5xl font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-amber-600">TAMDA</h1>

              

              <div className="w-full flex justify-center items-center mt-2">
                <hr className="w-1/6 border-amber-800" />
                <hr className="w-1/6 border-amber-800 ml-8" />
              </div>
            </div>
            Pure Copper.<br />Pure Life.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-amber-800 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the ancient wisdom of Ayurveda with our premium copper water bottles.
            Enhance your daily water intake with the natural benefits of copper.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-lg px-8 w-full sm:w-auto">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 w-full sm:w-auto">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="benefits">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://www.indianartvilla.in/cdn/shop/collections/copper_bottle_banner_2048x.jpg?v=1730281719')] bg-cover bg-fixed bg-center"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-amber-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Copper?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Star className="h-10 w-10 text-amber-600" />,
                title: "Premium Quality",
                description: "100% pure copper crafted by skilled artisans"
              },
              {
                icon: <Leaf className="h-10 w-10 text-amber-600" />,
                title: "Eco-Friendly",
                description: "Sustainable alternative to plastic bottles"
              },
              {
                icon: <Heart className="h-10 w-10 text-amber-600" />,
                title: "Health Benefits",
                description: "Natural antibacterial and antioxidant properties"
              },
              {
                icon: <Shield className="h-10 w-10 text-amber-600" />,
                title: "Lifetime Warranty",
                description: "Quality guaranteed for years to come"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-amber-100">
                  <motion.div
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-900">{benefit.title}</h3>
                  <p className="text-amber-700 text-lg">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-amber-50 to-orange-50" id="products">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 text-amber-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Collection
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                id: "1",
                image: "https://www.mypoojabox.in/cdn/shop/products/DSC01453copy.jpg?v=1658750399",
                name: "Classic Pure Copper Bottle",
                price: 49.99,
                description: "Sleek and minimalist design with a mirror finish"
              },
              {
                id: "2",
                image: "https://www.indianartvilla.in/cdn/shop/files/IAV-CC-7-140-1000A_25a11829-0712-4d39-ac59-780ddb91a34f_1024x1024.jpg?v=1742473622",
                name: "Mandala Engraved Bottle",
                price: 69.99,
                description: "Traditional patterns with modern elegance"
              },
              {
                id: "3",
                image: "https://peacoy.com/cdn/shop/files/46_18464e77-93b7-4618-a9f6-4ed56478e430.jpg?v=1693995694",
                name: "Tropical Paradise Bottle",
                price: 79.99,
                description: "Hand-painted with vibrant botanical designs"
              },
              {
                id: "4",
                image: "https://www.studiocoppre.com/cdn/shop/products/1BedsideCarafeandGlass_1_2048x2048.jpg?v=1740381804g",
                name: "Ayurvedic Copper Bottle",
                price: 52.99,
                description: "Infuses water with natural health benefits, perfect for daily use"
              },
              {
                id: "5",
                image: "https://m.media-amazon.com/images/I/51Pa-wt2j9L.jpg",
                name: "Smooth Finish Copper Bottle",
                price: 47.99,
                description: "Polished copper with a clean, contemporary shape"
              },
              {
                id: "6",
                image: "https://ptal.in/cdn/shop/files/DSCF0183.jpg?v=1743599168&width=1080",
                name: "Eco Copper Bottle",
                price: 45.99,
                description: "Eco-friendly, leak-proof, and great for everyday hydration"
              },
            ].map((product) => (
              <motion.div
                key={product.id}
                variants={fadeIn}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <motion.div
                    className="aspect-[4/5] relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-2 text-amber-900">{product.name}</h3>
                    <p className="text-amber-700 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-2xl font-bold text-amber-900">₹{(product.price * 83).toFixed(2)}</p>
                      <div className="text-amber-600">Free Shipping</div>
                    </div>
                    <Button
                      className="w-full bg-amber-700 hover:bg-amber-800 text-lg py-6"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart <ShoppingCart className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <img
                src="/tamda-logo.png"
                alt="TAMDA Copper Bottles"
                className="h-12 brightness-200"
              />
              <p className="text-amber-200">
                Premium copper bottles crafted with tradition and excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-amber-300">Home</a></li>
                <li><a href="#" className="hover:text-amber-300">Products</a></li>
                <li><a href="#" className="hover:text-amber-300">About Us</a></li>
                <li><a href="#" className="hover:text-amber-300">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li>Email: contact@tamda.com</li>
                <li>Phone: +91 77108 65350</li>
                <li>Location: India</li>
              </ul>
            </div>

            {/* Owner Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Created By</h3>
              <div className="space-y-4">
                <p className="text-xl font-bold">HIMANSHU NAG</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/himaanshunag15/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-200 hover:text-amber-300"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/himanshu-nag-71b87b235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-200 hover:text-amber-300"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-300">
            <p>© {new Date().getFullYear()} TAMDA Copper Bottles. All rights reserved.</p>
            <p className="mt-2 text-sm">Designed & Developed by Himanshu Nag</p>
          </div>
        </div>
      </footer>
    </main>
  );
}