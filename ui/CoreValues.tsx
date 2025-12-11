'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Container from "./Container"

export default function CoreValues() {
  return (
    <Container className="bg-gray">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Core Values
          </h2>
          <p className="text-gray-600 mb-8">
            We build every solution around people—earning trust, protecting your
            space, and making technology feel effortless.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-black-600 mt-1" />
              <span className="text-gray-700">
                <span className="font-semibold text-gray-900">Integrity & transparency:</span> clear proposals, no hidden steps, and updates you can count on.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-black-600 mt-1" />
              <span className="text-gray-700">
                <span className="font-semibold text-gray-900">Safety & reliability first:</span> every device, wire, and integration is tested to keep your home or business secure.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-black-600 mt-1" />
              <span className="text-gray-700">
                <span className="font-semibold text-gray-900">Design with purpose:</span> automation scenes and security workflows tailored to how you actually live and work.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-black-600 mt-1" />
              <span className="text-gray-700">
                <span className="font-semibold text-gray-900">Ownership after handover:</span> training, maintenance, and quick support so your systems stay smooth over time.
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-80 md:h-full">
          <Image
            src="https://res.cloudinary.com/dzhbpmnan/image/upload/v1765204834/corevalue_qciljc.webp" // put your image under /public/images/
            alt="Core Values Illustration"
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>
    </Container>
  );
}
