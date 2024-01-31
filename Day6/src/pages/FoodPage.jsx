// FoodPage.jsx
import React from 'react';
import './FoodPage.css'; // Add your CSS styles for the FoodPage here
import Navbar from '../component/Navbar';

const FoodPage = () => {
  // Placeholder data for food items
  const foodCategories = [
    { id: 1, category: 'For Kids', items: [
      { name: 'Birthday Cake', description: 'Delicious birthday cake for the celebration.' },
      { name: 'Party Pizza', description: 'Cheesy and flavorful pizza for the party.' },
      { name: 'Cupcakes', description: 'Assorted cupcakes with colorful toppings.' },
      { name: 'Chocolate Fondue', description: 'Melted chocolate served with fruits and snacks.' },
      { name: 'Finger Sandwiches', description: 'Delicate sandwiches with various fillings.' },
      { name: 'Fruit Salad', description: 'Fresh and refreshing fruit salad.' },
    ]},
    { id: 2, category: 'For Teens', items: [
      { name: 'Burger Bar', description: 'Build your own burgers with a variety of toppings.' },
      { name: 'Taco Buffet', description: 'Enjoy a selection of tacos with different fillings.' },
      { name: 'Smoothie Station', description: 'Customize your own refreshing smoothies with various fruits.' },
      { name: 'Nachos Platter', description: 'Indulge in a loaded nachos platter with all the fixings.' },
    ]},
    { id: 3, category: 'For Grown Adults', items: [
      { name: 'Wine and Cheese Pairing', description: 'Savor the combination of fine wines and gourmet cheeses.' },
      { name: 'Sushi Bar', description: 'Experience the art of sushi with a diverse selection.' },
      { name: 'Craft Beer Tasting', description: 'Explore a variety of craft beers with a tasting session.' },
      { name: 'Gourmet Desserts', description: 'Indulge in decadent gourmet desserts for a sweet experience.' },
    ]},
  ];

  return (
    <>
    <Navbar/>
    <div className="food-container">
      <h1>Food for the Birthday Event</h1>
      {foodCategories.map((category) => (
        <div key={category.id} className="food-category">
          <h2>{category.category}</h2>
          <div className="food-cards">
            {category.items.map((food, index) => (
              <div key={index} className="food-card">
                <h3>{food.name}</h3>
                <p>{food.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FoodPage;
