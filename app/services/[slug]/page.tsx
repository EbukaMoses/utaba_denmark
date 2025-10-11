import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../../../ui/Container";
import servicesData from "../../../data/services.json";

// Generate static params for all services
export function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.id,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

const ServiceDetailPage = ({ params }: PageProps) => {
  const { slug } = params;

  // Find the service by slug
  const service = servicesData.services.find(s => s.id === slug);

  // If service not found, show 404
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services" className="inline-flex items-center gap-2 bg-[#FE6500] hover:bg-[#e55a00] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
              <Link href="/" className="hover:text-[#FE6500] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[#FE6500] transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white font-medium">{service.title}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {service.shortDescription}
            </p>
            <div className="mt-8 h-1 w-24 bg-[#FE6500] animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{service.fullDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <CheckCircle2 className="w-6 h-6 text-[#FE6500] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits</h2>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#FE6500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FE6500] to-[#e55a00] rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FE6500]" />
                    Certified Professionals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FE6500]" />
                    Premium Quality Equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FE6500]" />
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FE6500]" />
                    Competitive Pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FE6500]" />
                    Warranty Included
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Other Services</h3>
                <div className="space-y-3">
                  {servicesData.services
                    .filter(s => s.id !== slug)
                    .slice(0, 4)
                    .map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        href={`/services/${relatedService.id}`}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#FE6500]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FE6500] transition-colors">
                            <ArrowRight className="w-5 h-5 text-[#FE6500] group-hover:text-white" />
                          </div>
                          <span className="text-sm font-medium text-gray-900 group-hover:text-[#FE6500]">
                            {relatedService.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Space Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to experience the benefits of {service.title}? Our expert team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
