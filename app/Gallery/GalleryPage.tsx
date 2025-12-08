'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import InnerPage from "../../ui/InnerPage";
import Container from "../../ui/Container";
import { GalleryGrid } from '../../ui/GalleryGrid';
import { getPaginatedGalleryItems } from '@/lib/gallery';

export default function GalleryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 20;

  const { items, totalPages } = useMemo(() => {
    const result = getPaginatedGalleryItems(currentPage, itemsPerPage);
    return {
      items: result.items,
      totalPages: result.totalPages
    };
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', page.toString());
    router.push(url.toString());
  };

  return (
    <div>
      <InnerPage
        title="Our Work"
        subtitle="Take a look at some of our recent projects." url="https://res.cloudinary.com/dzhbpmnan/image/upload/v1765204784/gallery-inner_n9mnos.webp"
      />

      <div className="w-full bg-gradient-to-br from-gray-50 to-white py-10 lg:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Explore Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Take a look at some of our recent projects showcasing our expertise in smart home automation, security systems, and electrical solutions.
            </p>
          </div>

          <GalleryGrid
            items={items}
            isPaginated={true}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-700 font-medium">Projects Completed</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-700 font-medium">Customer Satisfaction</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-700 font-medium">Support Available</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
