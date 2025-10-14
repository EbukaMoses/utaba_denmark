'use client';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const InnerPage = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <section className="relative h-[300px] md:h-[450px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt={`${title} Hero`}
        fill
        className="object-cover scale-105"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-[#FE6500] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>

          {/* Decorative Line */}
          <div className="mt-8 h-1 w-24 bg-[#FE6500] animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default InnerPage
