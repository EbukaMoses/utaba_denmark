import React from 'react';
import InnerPage from "../../ui/InnerPage";
import Image from "next/image";
import Container from "../../ui/Container";
import CoreValues from '../../ui/CoreValues';
import WhyChooseUs from '../../ui/WhyChooseUs';
import MissionVision from '../../ui/MissionVision';

const page = () => {
  return (
    <div>
      <InnerPage title="About Us" subtitle="Learn more about Onye BF Tech and our commitment to excellence" url="https://res.cloudinary.com/dzhbpmnan/image/upload/v1765204828/about-inner_vsphef.avif" />

      {/* Main About Section */}
      <div className="w-full bg-gradient-to-br from-gray-50 to-white py-20">
        <Container className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <div>
              <span className="text-[#FE6500] font-semibold text-sm uppercase tracking-wider">Welcome to</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Onye BF Tech</h1>
              <div className="h-1 w-24 bg-[#FE6500]"></div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                At <span className="font-semibold text-[#FE6500]">Onye BF Tech</span>, we specialize in transforming homes and businesses with cutting-edge automation and security solutions. Our team of certified professionals brings years of experience in smart home wiring, electrical automation, and advanced security systems.
              </p>

              <p>
                We understand that every space is unique, which is why we provide customized solutions tailored to your specific needs. From intelligent lighting control to comprehensive CCTV monitoring, we ensure your property is not just connected, but truly smart and secure.
              </p>

              <p>
                Our commitment to excellence and customer satisfaction has made us a trusted partner for residential and commercial automation projects across the region.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gradient-to-br from-[#FE6500] to-[#e55a00] p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-4xl font-bold mb-2">10+</h3>
                <p className="font-medium">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-[#FE6500] to-[#e55a00] p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="font-medium">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="flex-1 group">
            <div className="relative overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dzhbpmnan/image/upload/v1765204890/about_o2iz2n.png"
                alt="About Onye BF Tech"
                width={600}
                height={500}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#FE6500]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
            </div>
          </div>
        </Container>
      </div>

      <CoreValues />
      <WhyChooseUs />
      <MissionVision />

      {/* Team Section */}
      {/* <div className="w-full bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <HeaderOne title="Our Team" className="mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make our automation and security solutions possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Director</h3>
              <p className="text-gray-600">Leading our technical operations with over 15 years of experience in automation systems.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Engineer</h3>
              <p className="text-gray-600">Specializing in smart home integration and security system design.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Manager</h3>
              <p className="text-gray-600">Ensuring seamless project delivery and customer satisfaction.</p>
            </div>
          </div>
        </Container>
      </div> */}
    </div>
  )
}

export default page