'use client';

import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { state } = useCart();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#benefits", label: "Benefits" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-amber-900 hover:text-amber-700 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="bg-amber-700 hover:bg-amber-800 relative"
                onClick={() => router.push('/cart')}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <Button 
                className="bg-amber-700 hover:bg-amber-800 relative"
                onClick={() => router.push('/cart')}
                size="icon"
              >
                <ShoppingCart className="h-4 w-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-amber-900" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-white z-50 md:hidden"
            >
              <div className="p-5">
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-6 w-6 text-amber-900" />
                  </Button>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-amber-900 hover:text-amber-700 font-medium text-lg py-2 border-b border-amber-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 