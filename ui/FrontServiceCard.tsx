import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FrontServiceCard = ({ title, description, imgSrc, className, slug }: { title: string; description: string; imgSrc: string; className?: string; slug?: string }) => {
  const CardContent = (
    <div className={`relative flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden shadow-lg group cursor-pointer ${className}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

      {/* Content inside the card */}
      <div className="relative z-10 p-8 text-center text-white transform group-hover:translate-y-0 transition-transform duration-500">
        <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <div className="w-16 h-16 bg-[#FE6500] rounded-full flex items-center justify-center mx-auto">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FE6500] transition-colors duration-300">{title}</h3>
        <p className="text-sm leading-relaxed opacity-90">{description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-[#FE6500] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );

  // If slug is provided, wrap in Link
  if (slug) {
    return (
      <Link href={`/services/${slug}`}>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default FrontServiceCard;
