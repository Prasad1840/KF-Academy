import React, { useState } from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Meet your project team",
    description:
      "Here you'll meet the people who will work with you on this journey. They're here to support your goals and success.",
    image:
      "https://sibelco.getbynder.com/m/5f7bb5a8955a535b/large-Sib_EUR_BE_HQ_016.jpg",
  },
  {
    id: 2,
    title: "Your onboarding partners",
    description:
      "These partners will guide you through every step, answer your questions, and ensure a smooth onboarding process.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.q_G9gUGO9X5OBI8u8INGZQHaE8?w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    title: "Guides for every milestone",
    description:
      "Access detailed guides for every milestone to track your progress and know exactly what to do next.",
    image: "https://fellow.app/wp-content/uploads/2021/07/2-1.jpg",
  },
];

const Onboarding: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedCard(id);
  };

  const handleCloseClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation(); // Prevent card click from firing
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {cards.map((card) => {
          const isSelected = selectedCard === card.id;
          const isHidden = selectedCard !== null && selectedCard !== card.id;

          return (
            <div
              key={card.id}
              className={`relative flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white cursor-pointer transform transition duration-700 ease-in-out ${
                isHidden
                  ? "opacity-0 scale-75 pointer-events-none"
                  : isSelected
                  ? "scale-105 z-20"
                  : "hover:-translate-y-2"
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              {/* Close (X) Button */}
              {isSelected && (
                <button
                  onClick={handleCloseClick}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                >
                  ×
                </button>
              )}

              {/* Card Title */}
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                {card.title}
              </h2>

              {/* Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="rounded-lg shadow-lg mb-4"
              />

              {/* Expanded Content */}
              {isSelected && (
                <p className="text-gray-600 mt-2 animate-fade-in">
                  {card.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Onboarding;