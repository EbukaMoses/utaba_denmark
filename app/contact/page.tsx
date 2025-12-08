'use client';

import React, { useState } from 'react';
import InnerPage from "../../ui/InnerPage";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <InnerPage title="Contact Us" subtitle="Get in touch with our team for professional automation and security solutions" url="https://res.cloudinary.com/dzhbpmnan/image/upload/v1765204807/Our_Work_is_Simply___We_care_deeply___JPG__7_cqcbsg.jpg" />

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side: form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-8">
                <span className="text-[#FE6500] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Send us a message</h2>
                <div className="h-1 w-20 bg-[#FE6500]"></div>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-5 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 text-green-700 rounded-lg shadow-md animate-fade-in">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-semibold">Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-5 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 text-red-700 rounded-lg shadow-md animate-fade-in">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-semibold">Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#FE6500]`}
                    placeholder="Your full name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#FE6500]`}
                    placeholder="your.email@example.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#FE6500]`}
                    placeholder="Tell us about your project or inquiry..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FE6500] hover:bg-[#e55a00] disabled:bg-[#FE6500]/50 text-white py-2 lg:py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FE6500]/30 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right side: contact info */}
            <div className="space-y-8">
              <div>
                <span className="text-[#FE6500] font-semibold text-sm uppercase tracking-wider">Contact Information</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Get in touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ready to transform your space with smart automation and security solutions?
                  Contact our expert team today.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <a href="mailto:info@onyebftech.com" className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-[#FE6500]/10 rounded-full flex items-center justify-center group-hover:bg-[#FE6500] transition-colors">
                    <Mail className="w-6 h-6 text-[#FE6500] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Us</p>
                    <p className="text-gray-900 font-semibold">info@onyebftech.com</p>
                  </div>
                </a>
                <a href="tel:+2348069789227" className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-[#FE6500]/10 rounded-full flex items-center justify-center group-hover:bg-[#FE6500] transition-colors">
                    <Phone className="w-6 h-6 text-[#FE6500] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call Us</p>
                    <p className="text-gray-900 font-semibold">+234 806 978 9227</p>
                  </div>
                </a>
                <a href="tel:+2348160418107" className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-[#FE6500]/10 rounded-full flex items-center justify-center group-hover:bg-[#FE6500] transition-colors">
                    <Phone className="w-6 h-6 text-[#FE6500] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call Us</p>
                    <p className="text-gray-900 font-semibold">+234 816 041 8107</p>
                  </div>
                </a>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-[#FE6500]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#FE6500]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Visit Us</p>
                    <p className="text-gray-900 font-semibold">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[#FE6500] to-[#e55a00] p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Business Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="font-medium">Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-3">
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-full shadow flex items-center justify-center hover:bg-[#FE6500] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                    <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-full shadow flex items-center justify-center hover:bg-[#FE6500] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                    <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                  <a href="https://www.instagram.com/onyebfelectricalengineering?igsh=NjNuOWJ3N3hyZWRl" className="w-12 h-12 bg-gray-100 rounded-full shadow flex items-center justify-center hover:bg-[#FE6500] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                    <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                  {/* <a href="#" className="w-12 h-12 bg-gray-100 rounded-full shadow flex items-center justify-center hover:bg-[#FE6500] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage


