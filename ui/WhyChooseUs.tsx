'use client';
import Container from "./Container";



export default function WhyChooseUs() {
const whyus = [
  {
    title: "Certified Specialists",
    description: "Experienced engineers in smart wiring, automation, CCTV, and fire safety who design systems that actually fit your space.",
  },
  {
    title: "Custom-Built Solutions",
    description: "We start with your goals—comfort, safety, efficiency—and tailor every device, scene, and workflow to your daily routine.",
  },
  {
    title: "Reliable Delivery",
    description: "Clear timelines, tidy installations, and handover you can trust—so your home or business stays connected without drama.",
  },
  {
    title: "End-to-End Support",
    description: "From consult to maintenance, we keep you informed and supported, ensuring your systems stay secure and up to date.",
  },
]

  return (
    <div className="relative w-full bg-[url('https://res.cloudinary.com/dzhbpmnan/image/upload/v1765204795/whyus_izt3ik.avif')] -z-5">
        <div className="absolute inset-0 bg-cover bg-center bg-gradient-to-t from-black via-black to-black opacity-80 -z-10"></div>
        <Container className="!z-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            WHY CHOOSE US
          </h2>
          <p className="text-white leading-relaxed">
            Onye BF Tech delivers reliable, human-centered automation and security.
            We combine certified expertise with transparent communication, so you stay
            connected to every decision—getting a smarter, safer space that works the
            way you live and operate.
          </p>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          {whyus.map((item, index)=>(
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-6 h-64 w-64">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">
             {item.description}
            </p>
          </div>
          ))}

          
        </div>
      </div>
    </Container>
    </div>
  );
}
