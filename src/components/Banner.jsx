"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import profilePic from "../../public/profile.png";
import bannerBg from "../../public/bg-img.png";
import Image from "next/image";
import logo from "../../public/logo.png";

const Banner = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bannerBg}
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        className="absolute z-0 h-full"
      />

      {/* Content Box */}
      <div className="relative z-10 bg-white/10 text-white backdrop-blur-sm p-10 rounded-xl max-w-5xl w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left Column – Profile Image */}

          <div>
            <Image
              src={logo}
              alt="BD Travel Getaway Logo"
              width={170}
              height={170}
              className="rounded-full"
            />
            <h2 className="text-3xl font-bold mb-2">Rakibul Hasan</h2>
            <p className="text-lg mb-6">Executive Visa & Management</p>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Phone className="text-blue-300" size={18} />
                <span>+8801954-168874,</span>
                <span>+8801973-920384</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-blue-300" size={18} />
                <a
                  href="mailto:info.bdtravelgetaway2024@gmail.com"
                  className="hover:underline text-white"
                >
                  info.bdtravelgetaway2024@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-blue-300" size={18} />
                <a
                  href="mailto:hasanrakibul124@gmail.com"
                  className="hover:underline text-white"
                >
                  hasanrakibul124@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="text-blue-300 text-base" size={18} />
                <span>
                  Abed Ali Super Market (1st Floor), KA-59, Pragati Sarani Road,
                  Nadda, Gulshan, Dhaka-1212
                </span>
              </div>
            </div>
          </div>
          {/* Right Column – Info */}

          <div className="flex justify-center h-[400px]">
            <Image
              src={profilePic}
              alt="Rakibul Hasan"
              width={400}
              height={400}
              className="rounded-full border-4 border-white shadow-lg object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
