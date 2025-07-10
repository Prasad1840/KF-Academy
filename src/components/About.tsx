import React from "react";

const cardData = [
  {
    id: 1,
    title: "Hoonartek",
    description:
      "Discover how Hoonartek’s delivery-first culture and agile innovation shape impactful careers and partnerships.",
    image: "/MicrosoftTeams-image (15) 1.png",
  },
  {
    id: 2,
    title: "Korn Ferry",
    description:
      "Korn Ferry empowers global transformation through talent, leadership, and organizational excellence.",
    image: "/KFY_BIG.png",
  },
];

export default function AboutUs() {
  return (
    <div className="w-full text-white font-sans scroll-smooth">
      {/* ===== Hero Section ===== */}
      <section className="h-[70vh] bg-[url('/aboutbg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-gradient-to-br from-[#003C5A]/90 via-[#002C4A]/90 to-[#001B38]/90 flex flex-col justify-center items-center px-6 text-center">
        <h2 className="text-5xl font-extrabold tracking-tight">
          <span className="inline-block skew-x-[-10deg]">About Us</span>
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
            className="object-contain w-100 h-screen mx-auto my-auto transition-transform duration-500 group-hover:scale-105"
          />


            {/* Sliding Overlay */}
            <div className="absolute inset-0 bg-[rgba(0,99,79,0.7)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {card.title}
              </h2>
              <p className="text-lg max-w-md leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
