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
    const clientstwo = [
    { name: "Client 1", logo: "assets/logos/4season.webp" },
    { name: "Client 2", logo: "assets/logos/biofuel.webp" },
    { name: "Client 3", logo: "assets/logos/dell.webp" },
    { name: "Client 4", logo: "assets/logos/infosys.webp" },
    { name: "Client 5", logo: "assets/logos/ey.webp" },
    { name: "Client 6", logo: "assets/logos/intel.webp" },
    { name: "Client 7", logo: "assets/logos/itc.webp" },
    { name: "Client 8", logo: "assets/logos/john.webp" },
    { name: "Client 9", logo: "assets/logos/jw.webp" },
    { name: "Client 10", logo: "assets/logos/sap.webp" },
    { name: "Client 11", logo: "assets/logos/shangrila.webp" },
    { name: "Client 12", logo: "assets/logos/taj.webp" },
  ];

  return (
    <div className="w-full bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2754C7]">
          Our Esteemed Clientele
        </h2>
      </div>
      
      {/* First Marquee - Left to Right */}
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {clients.map((client, index) => (
          <div
            key={index}
            className="shrink-0 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center"
            style={{ width: 120, height: 80 }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<div class="text-gray-400 font-semibold text-center text-xs sm:text-sm">${client.name}</div>`;
              }}
            />
          </div>
        ))}
      </Marquee>

      {/* Second Marquee - Right to Left */}
      <div className="mt-4 sm:mt-6 lg:mt-8">
        <Marquee gradient={false} speed={40} pauseOnHover={true} direction="right">
          {clientstwo.map((client, index) => (
            <div
              key={index}
              className="shrink-0 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center"
              style={{ width: 120, height: 80 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<div class="text-gray-400 font-semibold text-center text-xs sm:text-sm">${client.name}</div>`;
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClienteleMarquee;