'use client';

import Image from "next/image";
import Hero from "../ui/Hero"
import Container from "../ui/Container"
import HeaderOne from "../ui/HeaderOne"
import HeaderTwo from "../ui/HeaderTwo"
import Divider from "../ui/Divider"
import Button from "../ui/Button"
import FrontServiceCard from "../ui/FrontServiceCard"
import PictureGallery from "../ui/PictureGallery"
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import servicesData from "../data/services.json"
import { useState, useEffect } from "react"

export default function Home() {
  const services = [
    { title: "Smart Home Wiring", description: "Professional installation of smart home wiring solutions for convenience, comfort, and efficiency", imgSrc: "/hero1.jpg", slug: "smart-home-wiring" },
    { title: "Sound System Automation", description: "High-quality sound system automation for seamless entertainment and immersive audio experience", imgSrc: "/hero2.jpg", slug: "sound-system-automation" },
    { title: "CCTV & Security", description: "Comprehensive CCTV installation and monitoring solutions to keep your property secure", imgSrc: "/hero3.jpg", slug: "cctv" },
    { title: "Fire Alarm Systems", description: "Advanced fire alarm systems to safeguard lives and property with timely alerts", imgSrc: "/hero4.jpg", slug: "fire-alarm" },
    { title: "Embedded Systems", description: "Custom embedded system designs to automate and streamline your operations", imgSrc: "/hero5.jpg", slug: "embedded-systems-automation" },
  ];

  // Testimonials carousel state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % Math.ceil(servicesData.testimonials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonials = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % Math.ceil(servicesData.testimonials.length / 3));
  };

  const prevTestimonials = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + Math.ceil(servicesData.testimonials.length / 3)) % Math.ceil(servicesData.testimonials.length / 3));
  };

  const goToTestimonialSlide = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  // Get current set of 3 testimonials
  const getCurrentTestimonials = () => {
    const startIndex = currentTestimonialIndex * 3;
    return servicesData.testimonials.slice(startIndex, startIndex + 3);
  };

  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero5.jpg",
    "/about.png",
    "/mission.jpg",
    "/vision.jpg",
    "/corevalue.webp"
  ];

  const quickServices = [
    { title: "Smart Home Wiring", description: "Professional installation of smart home wiring solutions for convenience and efficiency.", imgSrc: "/hero1.jpg" },
    { title: "Sound System Automation", description: "High-quality sound system automation for seamless entertainment experience.", imgSrc: "/hero2.jpg" },
    { title: "CCTV & Security", description: "Comprehensive CCTV installation and monitoring solutions for property security.", imgSrc: "/hero3.jpg" },
    { title: "Fire Alarm Systems", description: "Advanced fire alarm systems to safeguard lives and property with timely alerts.", imgSrc: "/hero4.jpg" },
  ];

  return (
    <div className="font-sans">
      <Hero />

      {/* Quick Services Cards - Floating Above */}
      <Container className="relative -mt-32 mb-20 z-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {quickServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={service.imgSrc} 
                  alt={service.title} 
                  width={300} 
                  height={192} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#FE6500] transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-[#FE6500] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* about section  */}
      <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <Container className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src="/about2.jpg" 
                alt="About Onye BF Tech" 
                width={600} 
                height={500} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FE6500]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block">
              <span className="text-[#FE6500] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <div className="h-1 w-20 bg-[#FE6500] mt-2"></div>
            </div>
            <HeaderOne title="About Us" className="!text-4xl !font-bold" />
            <p className="text-gray-700 leading-relaxed text-lg">
              At <span className="font-semibold text-[#FE6500]">Onye BF Tech</span>, we specialize in transforming homes and businesses with cutting-edge automation and security solutions. Our team of certified professionals brings years of experience in smart home wiring, electrical automation, and advanced security systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We understand that every space is unique, which is why we provide customized solutions tailored to your specific needs. From intelligent lighting control to comprehensive CCTV monitoring, we ensure your property is not just connected, but truly smart and secure.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FE6500] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Certified Experts</h4>
                  <p className="text-sm text-gray-600">Professional installation team</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FE6500] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Round-the-clock assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FE6500] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Quality Assured</h4>
                  <p className="text-sm text-gray-600">Premium components only</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FE6500] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Custom Solutions</h4>
                  <p className="text-sm text-gray-600">Tailored to your needs</p>
                </div>
              </div>
            </div>

            <Button className="bg-[#FE6500] text-white mt-6" path="/about" title="Discover Our Story" />
          </div>
        </Container>
      </div>

      {/* our service section  */}
      <div className="w-full bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#FE6500] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <HeaderOne title="Our Services" className="!text-4xl !font-bold mt-4 mb-6" />
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We provide comprehensive automation and security solutions designed to enhance your living and working environment with cutting-edge technology and reliable service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <FrontServiceCard 
                key={index} 
                title={item.title} 
                description={item.description} 
                imgSrc={item.imgSrc} 
                slug={item.slug}
                className="h-80" 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-[#FE6500] text-white text-lg px-8 py-4" path="/services" title="View All Services" />
          </div>
        </Container>
      </div>

      {/* why choose us section  */}
      <div className="relative w-full bg-[url('/hero.jpg')] bg-cover bg-center bg-fixed py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-[#FE6500]/30"></div>
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#FE6500] font-semibold text-sm uppercase tracking-wider">Our Advantage</span>
            <HeaderTwo title="Why Choose Us" className="text-white !text-4xl !font-bold mt-4 mb-6" />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-white text-center text-lg leading-relaxed mb-12">
            <p>
              With over a decade of experience in automation and security systems, we bring unmatched expertise to every project. Our certified technicians use only premium components and cutting-edge technology to ensure your systems are reliable, efficient, and future-proof.
            </p>
            <p>
              We pride ourselves on delivering personalized solutions that perfectly match your needs and budget. From initial consultation to final installation and ongoing support, we&apos;re committed to your complete satisfaction and peace of mind.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#FE6500] rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Premium Quality</h3>
              <p className="text-gray-200 text-center">
                We use only the highest quality components and materials for lasting performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#FE6500] rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Expert Team</h3>
              <p className="text-gray-200 text-center">
                Certified professionals with years of experience in automation systems.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#FE6500] rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Full Support</h3>
              <p className="text-gray-200 text-center">
                24/7 customer support and maintenance to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* picture gallery */}
      <div className="w-full bg-gradient-to-br from-gray-50 to-white py-20">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#FE6500] font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Project Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our portfolio of successful installations and see the quality of our work firsthand.
            </p>
          </div>
          <PictureGallery images={images} />
        </Container>
      </div>

      {/* Client Testimonials */}
      <div className="w-full bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#FE6500] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from our satisfied customers across Nigeria
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonials}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-[#FE6500] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonials}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-[#FE6500] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonials Grid - Show 3 at a time */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
              {getCurrentTestimonials().map((testimonial: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_: any, i: number) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FE6500] to-[#e55a00] rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(servicesData.testimonials.length / 3) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToTestimonialSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentTestimonialIndex ? 'bg-[#FE6500] w-8' : 'bg-gray-300 w-4 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial set ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>

    </div>
  );
}
