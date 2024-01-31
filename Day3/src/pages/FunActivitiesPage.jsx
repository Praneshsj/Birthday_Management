// FunActivitiesPage.jsx
import React from 'react';
import './FunActivitiesPage.css'; // Add your CSS styles for the FunActivitiesPage here
import Navbar from '../component/Navbar';

const FunActivitiesPage = () => {
  // Placeholder data for fun activities
  const funActivities = [
    { id: 1, category: 'For Kids', activities: [
      { name: 'Photo Booth', description: 'Capture fun moments with a themed photo booth.' },
      { name: 'Face Painting', description: 'Exciting face painting for kids and adults.' },
      { name: 'Balloon Animals', description: 'Create playful balloon animals with a talented artist.' },
      { name: 'Treasure Hunt', description: 'Organize a thrilling treasure hunt for adventurous guests.' },
      { name: 'DIY Craft Station', description: 'Let guests unleash their creativity with a DIY craft station.' },
    ]},
    { id: 2, category: 'For Teens', activities: [
      { name: 'Karaoke Night', description: 'Get ready for a musical showdown with a karaoke night.' },
      { name: 'Gaming Tournament', description: 'Compete in an epic gaming tournament with your friends.' },
      { name: 'Escape Room Challenge', description: 'Solve puzzles and crack codes in an exciting escape room challenge.' },
      { name: 'Outdoor Adventure', description: 'Embark on an outdoor adventure with activities like zip-lining and rock climbing.' },
    ]},
    { id: 3, category: 'For Grown Adults', activities: [
      { name: 'Wine Tasting', description: 'Indulge in a sophisticated wine tasting experience.' },
      { name: 'Live Entertainment', description: 'Enjoy live performances from bands or comedians.' },
      { name: 'Cocktail Mixology Class', description: 'Learn the art of crafting delicious cocktails with a mixology class.' },
      { name: 'Casino Night', description: 'Try your luck with a thrilling casino night experience.' },
    ]},
  ];

  return (
    <>
    <Navbar/>
    <div className="fun-activities-container">
      <h1>Fun Activities for the Birthday Event</h1>
      {funActivities.map((category) => (
        <div key={category.id} className="fun-category">
          <h2>{category.category}</h2>
          <div className="fun-activities-cards">
            {category.activities.map((activity, index) => (
              <div key={index} className="fun-activity-card">
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FunActivitiesPage;
