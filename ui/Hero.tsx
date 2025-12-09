'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const slides = [
  {
    image: '/hero1.jpg',
    title: 'Smart Home Wiring & Automation',
    subtitle: 'Seamless integration of technology to make your home smarter and safer.',
    cta: 'Explore Solutions',
  },
  {
    image: '/hero2.jpg',
    title: 'Sound System Automation',
    subtitle: 'Experience premium audio systems with effortless control.',
    cta: 'Discover More',
  },
  {
    image: '/hero3.jpg',
    title: 'CCTV & Security',
    subtitle: 'Keep your property protected with our top-tier surveillance systems.',
    cta: 'Secure Your Space',
  },
  {
    image: '/hero4.jpg',
    title: 'Fire Alarm Systems',
    subtitle: 'Reliable fire detection solutions for homes and businesses.',
    cta: 'Learn More',
  },
  {
    image: '/hero5.jpg',
    title: 'Embedded Systems & Automation',
    subtitle: 'Custom automation solutions tailored to your unique needs.',
    cta: 'Get Started',
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden p-0"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* show this video on tablet and desktop screen sizes, hide on mobile */}
      <iframe
        src="https://www.youtube.com/embed/E38kuUE3BLg?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=E38kuUE3BLg"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full min-w-full border-0 hidden md:block"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="OnyeBF Technologies Company"
      ></iframe>

      {/* show this video only on mobile screen size, hide on tablet and desktop */}
      <iframe
        src="https://www.youtube.com/embed/jlXRSzuuXSA?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=jlXRSzuuXSA"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full min-w-full border-0 block md:hidden"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="OnyeBF Technologies Company"
      ></iframe>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" aria-hidden="true"></div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} aria-hidden="true"></div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-[#FE6500] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FE6500] transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-[#FE6500] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FE6500] transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {/* {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#FE6500] w-12' : 'bg-white/50 w-8 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))} */}
      </div>

      {/* Text content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 md:px-6">
        <div className="max-w-5xl w-full text-center">
          {/* Main Title with Animation */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-white text-3xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="inline-block animate-fade-in">{slides[index].title}</span>
            </h1>
          </div>

          {/* Subtitle with Staggered Animation */}
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-100 text-md md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {slides[index].subtitle}
            </p>
          </div>

          {/* CTA Buttons with Staggered Animation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-[#FE6500] hover:bg-[#e55a00] text-white px-6 lg:px-8 py-2 lg:py-4 rounded-full font-semibold text-md lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FE6500]/50"
            >
              {slides[index].cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
          </div>

          {/* Stats Section */}
          <div className={`mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FE6500] mb-2">10+</div>
              <div className="text-white/80 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-[#FE6500] mb-2">500+</div>
              <div className="text-white/80 text-sm md:text-base">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FE6500] mb-2">100%</div>
              <div className="text-white/80 text-sm md:text-base">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
