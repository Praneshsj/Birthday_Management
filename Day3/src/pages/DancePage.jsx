// DancePage.jsx
import React from 'react';
import './DancePage.css'; // Add your CSS styles for the DancePage here
import Navbar from '../component/Navbar';

const DancePage = () => {
  // Placeholder data for dance party items
  const dancePartyItems = [
    { id: 1, name: 'DJ Music', description: 'Energetic DJ music to keep the party alive.' },
    { id: 2, name: 'Dance Floor', description: 'Spacious dance floor for everyone to groove.' },
    { id: 3, name: 'Disco Lights', description: 'Colorful disco lights to create a vibrant atmosphere.' },
    { id: 4, name: 'Party Games', description: 'Engaging dance-related party games for entertainment.' },
    { id: 5, name: 'Professional Dancers', description: 'Professional dancers to showcase stunning performances.' },
    // Add more dance party items as needed
  ];

  return (
    <>
    <Navbar/>
    <div className="dance-container">
      <h1>Dance Party for the Birthday Event</h1>
      <div className="dance-cards">
        {dancePartyItems.map((dance) => (
          <div key={dance.id} className="dance-card">
            <h2>{dance.name}</h2>
            <p>{dance.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default DancePage;
