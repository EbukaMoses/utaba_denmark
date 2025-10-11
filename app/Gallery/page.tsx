'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import InnerPage from "../../ui/InnerPage";
import Container from "../../ui/Container";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "/hero1.jpg", alt: "Smart Home Wiring Project", category: "Smart Home" },
    { src: "/hero2.jpg", alt: "Sound System Installation", category: "Audio Systems" },
    { src: "/hero3.jpg", alt: "CCTV Security Setup", category: "Security" },
    { src: "/hero4.jpg", alt: "Fire Alarm System", category: "Safety" },
    { src: "/hero5.jpg", alt: "Automation Control Panel", category: "Automation" },
    { src: "/about.png", alt: "Project Overview", category: "Projects" },
    { src: "/mission.jpg", alt: "Mission Statement", category: "Company" },
    { src: "/vision.jpg", alt: "Vision Statement", category: "Company" },
    { src: "/corevalue.webp", alt: "Core Values", category: "Company" },
  ];

  const categories = ["All", "Smart Home", "Audio Systems", "Security", "Safety", "Automation", "Projects", "Company"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      <InnerPage title="Our Work" subtitle="Take a look at some of our recent projects." />

      <div className="w-full bg-gradient-to-br from-gray-50 to-white py-10 lg:py-20">
        <Container>
          <div className="text-center mb-12">
            <span className="text-[#FE6500] font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Explore Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Take a look at some of our recent projects showcasing our expertise in smart home automation, security systems, and electrical solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                  ? 'bg-[#FE6500] text-white shadow-lg shadow-[#FE6500]/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-[#FE6500] hover:text-white shadow-md hover:shadow-lg hover:scale-105'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                onClick={() => setSelectedImage(image.src)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <div className="w-16 h-16 bg-[#FE6500] rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-[#FE6500] text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FE6500] transition-colors">{image.alt}</h3>
                  <span className="inline-block text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for Image Preview */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-5xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white bg-[#FE6500] hover:bg-[#e55a00] rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Close preview"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Image
                  src={selectedImage}
                  alt="Gallery preview"
                  width={1000}
                  height={750}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          )}
        </Container>
      </div>

      {/* Project Statistics */}
      <div className="w-full bg-gradient-to-br from-[#FE6500] to-[#e55a00] py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-white/90 max-w-2xl mx-auto">Numbers that speak for our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">500+</h3>
              <p className="text-white/90 font-medium">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">10+</h3>
              <p className="text-white/90 font-medium">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/90 font-medium">Customer Satisfaction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</h3>
              <p className="text-white/90 font-medium">Support Available</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default GalleryPage