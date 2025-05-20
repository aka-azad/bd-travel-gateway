import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Banner from "@/components/Banner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white/10 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white/40">
              <Image
                src={logo}
                alt="BD Travel Getaway Logo"
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>

            <span className="text-2xl font-bold">BD Travel Getaway</span>
          </div>
        </div>
      </header>
      {/* Banner section */}
      <Banner />

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>&copy; 2025 BD Travel Getaway. All rights reserved.</p>
      </footer>
    </div>
  );
}
