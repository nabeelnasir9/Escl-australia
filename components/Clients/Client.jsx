"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ClientsMarquee = () => {
  // Add your client image filenames here
  const clientImages = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
  ];
  
  // Duplicate the array to create seamless loop
  const duplicatedImages = [...clientImages, ...clientImages];

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        {/* <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            OUR CLIENTS
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            <span className="text-blue-600">Major Clients</span> we work with.
          </p>
        </motion.div> */}

        {/* Marquee Container */}
        <div className="relative">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-22 h-18 md:w-40 md:h-24 lg:w-48 lg:h-28 relative"
                whileHover={{
                  scale: 1.00,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-full h-full bg-white rounded-lg transition-shadow duration-300 p-4 flex items-center justify-center">
                  <Image
                    src={`/clients/${image}`}
                    alt={`Client ${(index % clientImages.length) + 1}`}
                    fill
                    className="object-contain filter transition-all duration-300"
                    sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;