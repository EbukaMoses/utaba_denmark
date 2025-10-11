'use client';

import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to providing cutting-edge solutions in
              electrical wiring, smart home automation, and security
              systems that enhance comfort, safety, and efficiency for
              our clients. We strive to deliver the best-in-class
              designs and services, with honesty, transparency, and a
              relentless pursuit of excellence.
            </p>
          </div>
          {/* Image */}
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/mission.jpg" // replace with your image in /public/images
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg order-last md:order-first">
            <Image
              src="/vision.jpg" // replace with your image
              alt="Our Vision"
              fill
              className="object-cover"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be a leading name in the automation and security
              industry, setting new standards in innovation, reliability
              and customer satisfaction. We aim to shape the future of
              smart living and integrated technology solutions, making
              everyday life safer and more efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
