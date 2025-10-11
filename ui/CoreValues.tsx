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
            Our core value is built on the following:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Integrity
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-black-600 mt-1" />
              <span className="text-gray-700">
                Honest and transparent processes from start to finish.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-black-600 mt-1" />
              <span className="text-gray-700">
                Committed to providing the best of the best of designs.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-black-600 mt-1" />
              <span className="text-gray-700">Reputation means a lot to us.</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-black-600 mt-1" />
              <span className="text-gray-700">When we promise, we deliver.</span>
            </li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-80 md:h-full">
          <Image
            src="/corevalue.WEBP" // put your image under /public/images/
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
