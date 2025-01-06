import React from 'react';
import './ClientsBanner.css';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  {
    name: 'OctoGaming',
    logo: '/logos/octogaming.png'
  },
  {
    name: 'Air Liquide',
    logo: '/logos/airliquide.png'
  },
  {
    name: 'LeCab / SnapCar',
    logo: '/logos/lecab.png'
  },
  {
    name: 'QuickSign',
    logo: '/logos/quicksign.png'
  }
];

const ClientsBanner: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="banner">
        <div className="slide">
          {clients.map((client, index) => (
            <div key={index} className="client">
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                width={120}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
        <div className="slide">
          {clients.map((client, index) => (
            <div key={`duplicate-${index}`} className="client">
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                width={120}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsBanner; 