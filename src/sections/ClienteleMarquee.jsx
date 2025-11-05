import React from "react";
import Marquee from "react-fast-marquee";

const ClienteleMarquee = () => {
  const clients = [
    { name: "Client 1", logo: "assets/logos/ckpc.webp" },
    { name: "Client 2", logo: "assets/logos/culture.webp" },
    { name: "Client 3", logo: "assets/logos/gok.webp" },
    { name: "Client 4", logo: "assets/logos/itr.webp" },
    { name: "Client 5", logo: "assets/logos/kfcsc.webp" },
    { name: "Client 6", logo: "assets/logos/kfdc.webp" },
    { name: "Client 7", logo: "assets/logos/PCBR.webp" },
    { name: "Client 8", logo: "assets/logos/tourism.webp" },
  ];

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2754C7]">
          Our Esteemed Clientele
        </h2>
      </div>
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {clients.map((client, index) => (
          <div
            key={index}
            className="shrink-0 mx-8 flex items-center justify-center"
            style={{ width: 160, height: 100 }} // fixed size for consistent spacing
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<div class="text-gray-400 font-semibold text-center">${client.name}</div>`;
              }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClienteleMarquee;
