'use client';
import React from 'react'
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] to-[#333333] text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Onye BF Tech</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Leading provider of smart home automation and security solutions.
            Transforming spaces with cutting-edge technology and professional service.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/onyebftech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FE6500] transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/onyebftech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FE6500] transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/onyebftech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FE6500] transition-all duration-300 hover:scale-110"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/onyebftech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FE6500] transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6 relative inline-block">
            Our Services
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#FE6500]"></span>
          </h2>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services/smart-home-wiring" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Smart Home Wiring</Link></li>
            <li><Link href="/services/electrical-wiring-automation" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Electrical Wiring & Automation</Link></li>
            <li><Link href="/services/sound-system-automation" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Sound System Automation</Link></li>
            <li><Link href="/services/cctv" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>CCTV & Security</Link></li>
            <li><Link href="/services/fire-alarm" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Fire Alarm Systems</Link></li>
            <li><Link href="/services/embedded-systems-automation" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Embedded Systems</Link></li>
            <li><Link href="/services/smart-locks" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Smart Locks & Biometric Security</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6 relative inline-block">
            Quick Links
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#FE6500]"></span>
          </h2>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Home</Link></li>
            <li><Link href="/about" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Services</Link></li>
            <li><Link href="/Gallery" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[#FE6500] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#FE6500] rounded-full group-hover:scale-150 transition-transform"></span>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6 relative inline-block">
            Contact Info
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#FE6500]"></span>
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 group">
              <Mail className="w-5 h-5 text-[#FE6500] group-hover:scale-110 transition-transform" />
              <a href="mailto:info@onyebftech.com" className="hover:text-[#FE6500] transition-colors">info@onyebftech.com</a>
            </div>
            <div className="flex items-center gap-3 group">
              <Phone className="w-5 h-5 text-[#FE6500] group-hover:scale-110 transition-transform" />
              <a href="tel:+2348069789227" className="hover:text-[#FE6500] transition-colors">+234 806 978 9227</a>
            </div>
            <div className="flex items-center gap-3 group">
              <Phone className="w-5 h-5 text-[#FE6500] group-hover:scale-110 transition-transform" />
              <a href="tel:+2348160418107" className="hover:text-[#FE6500] transition-colors">+234 816 041 8107</a>
            </div>
            <div className="flex items-center gap-3 group">
              <MapPin className="w-5 h-5 text-[#FE6500] group-hover:scale-110 transition-transform" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3 group">
              <Clock className="w-5 h-5 text-[#FE6500] group-hover:scale-110 transition-transform" />
              <span>Mon-Fri: 8AM-6PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-2 md:mb-0"> {new Date().getFullYear()} Onye BF Tech. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-[#FE6500] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FE6500] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer