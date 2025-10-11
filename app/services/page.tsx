'use client';
import InnerPage from "../../ui/InnerPage";
import { services } from "../../lib/data";
import { Home, Zap, Bell } from 'lucide-react';
import Button from '@/ui/Button';

export default function Services() {

  return (
    <div>
      <InnerPage title="Our Services" subtitle="Professional automation and security solutions tailored to your needs" />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              We provide a wide range of cutting-edge automation and security services tailored to your needs.
            </p>
          </div> */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow hover:shadow-xl transition group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-[#FE6500]/10 rounded-full group-hover:bg-[#FE6500] group-hover:text-white transition">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
                <Button className="bg-[#FE6500] text-white text-sm mt-8 px-4 py-3" path={`/services/${service.slug}`} title="Read More" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our Services
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              We deliver advanced automation and security solutions designed to make your life safer and easier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FE6500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#FE6500]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Installation</h3>
              <p className="text-gray-600">Professional installation by certified technicians with years of experience.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FE6500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-[#FE6500]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored automation solutions designed specifically for your space and needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FE6500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-[#FE6500]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support and maintenance to keep your systems running smoothly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}