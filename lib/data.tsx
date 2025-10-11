import React from 'react';
import { Home, Zap, Volume2, Video, Bell, Cpu, Shield } from 'lucide-react';

export const services = [
    {
      id: 1,
      icon: <Home className="w-10 h-10 text-[#333333]" />,
      title: 'Smart Home Wiring',
      slug: 'smart-home-wiring',
      description:
        'Professional installation of smart home wiring solutions for convenience, comfort, and efficiency.',
    },
    {
      id: 2,
      icon: <Zap className="w-10 h-10 text-[#333333]" />,
      title: 'Electrical Wiring & Automation',
      slug: 'electrical-wiring-automation',
      description:
        'Reliable electrical wiring combined with advanced automation to power your modern spaces.',
    },
    {
      id: 3,
      icon: <Volume2 className="w-10 h-10 text-[#333333]" />,
      title: 'Sound System Automation',
      slug: 'sound-system-automation',
      description:
        'High-quality sound system automation for seamless entertainment and immersive audio experience.',
    },
    {
      id: 4,
      icon: <Video className="w-10 h-10 text-[#333333]" />,
      title: 'CCTV & Security Systems',
      slug: 'cctv',
      description:
        'Comprehensive CCTV installation and monitoring solutions to keep your property secure.',
    },
    {
      id: 5,
      icon: <Bell className="w-10 h-10 text-[#333333]" />,
      title: 'Fire Alarm Systems',
      slug: 'fire-alarm',
      description:
        'Advanced fire alarm systems to safeguard lives and property with timely alerts.',
    },
    {
      id: 6,
      icon: <Cpu className="w-10 h-10 text-[#333333]" />,
      title: 'Embedded Systems & Automation',
      slug: 'embedded-systems-automation',
      description:
        'Custom embedded system designs to automate and streamline your operations.',
    },
    {
      id: 7,
      icon: <Shield className="w-10 h-10 text-[#333333]" />,
      title: 'Smart Locks & Biometric Security',
      slug: 'smart-locks',
      description:
        'Advanced biometric and smart lock systems for enhanced security and convenient access control.',
    },
  ];
