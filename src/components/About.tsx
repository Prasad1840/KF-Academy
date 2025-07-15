import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import FadeInSection from "./FadeInSection";

const cardData = [
  {
    id: 1,
    title: "Hoonartek",
    description: (
      <p>
        Hoonartek is a global leader in Data, Digital, and AI solutions,
        headquartered in Pune with a presence across the US, UK, Europe,
        Malaysia, and Africa. We champion an outcome-oriented delivery culture,
        built around change, empowerment, and trust, combined with a spirit of
        continuous innovation. Our commitment to sustainability and community,
        evident through initiatives like clean-energy CSR projects, reflects our
        dedication to making a broader positive impact.
        <br />
        <Link
          to="https://hoonartek.com/"
          className="inline-block mt-4 text-sm font-semibold text-white underline hover:text-blue-300 transition"
        >
          Learn More →
        </Link>
      </p>
    ),
    image: "/MicrosoftTeams-image (15) 1.png",
  },
  {
    id: 2,
    title: "Korn Ferry",
    description:
      <p>Korn Ferry empowers global transformation through talent, leadership, and organizational excellence.
        <Link
          to="https://www.kornferry.com/"
          className="inline-block mt-4 text-sm font-semibold text-white underline hover:text-blue-300 transition"
        >
          Learn More →
        </Link>
      </p>,
      
    image: "/KFY_BIG.png",
  },
];

export default function AboutUs() {
  return (
  <FadeInSection>
    <div className="w-full text-white font-sans scroll-smooth">
      {/* ===== Hero Section ===== */}
      <section className="h-[40vh] bg-[url('/aboutbg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-gradient-to-br from-[#003C5A]/90 via-[#002C4A]/90 to-[#001B38]/90 flex flex-col justify-center items-center px-6 text-center">
        <h2 className="text-8xl font tracking-tight opacity-80">
          <span className="inline-block skew-x-[-10deg]">
            ABOUT <span className="font-bold">US</span>
          </span>
        </h2>
      </section>

      {/* ===== Sliding Overlay Cards Section ===== */}
      <section className="w-full flex flex-col md:flex-row">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="group relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto cursor-pointer overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="object-contain w-115 h-115 mx-auto my-auto transition-transform duration-500 group-hover:scale-105"
            />

            {/* Sliding Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {card.title}
              </h2>
              <div className="text-lg font-semibold max-w-md leading-relaxed">
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
    
    </FadeInSection>
  );
}
