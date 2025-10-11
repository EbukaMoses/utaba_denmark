'use client';
import Container from "./Container";



export default function WhyChooseUs() {
const whyus = [
    {title: "Fast Building", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"},
    {title: "Smartly Execute", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"},
    {title: "Carefully Planned", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"},
    {title: "Perfect Design", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"},
]

  return (
    <div className="relative w-full bg-[url('/whyus.AVIF')] -z-5">
        <div className="absolute inset-0 bg-cover bg-center bg-gradient-to-t from-black via-black to-black opacity-80 -z-10"></div>
        <Container className="!z-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            WHY CHOOSE US
          </h2>
          <p className="text-white leading-relaxed">
            Asa Castle is known for its integrity. Clients have praised the group
            for their consistency, respect and vision. The company ensures that the
            client feels connected to the artistic process.
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
