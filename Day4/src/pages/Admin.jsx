// import React, { useState } from 'react';
// import CollegeList from './CollegeList';
// import AdminNavbar from '../component/AdminNavbar';
// import './Admin.css';
// const Admin = () => {
//   // State to manage the list of colleges
//   const [colleges, setColleges] = useState([
//     { 
//         id: 1, name: 'Avengers based Theme',
//      image: 'https://woogle.co.in/cdn/shop/files/avengers-party-theme-185_1024x1024.webp?v=1683089456',
//       description: 'Transform your birthday celebration into an epic adventure with an Avengers-themed party! Assemble your friends and family to embark on a day filled with superhero excitement. Decorate your space with vibrant colors, action-packed banners, and iconic symbols of Earths mightiest heroes. Imagine the thrill as young partygoers discover a world where Spider-Man swings from the walls, Iron Mans suit gleams in the party lights, and Captain Americas shield stands tall as a centerpiece.' },
//     { 
//         id: 2, name: 'Barbie based theme',
//      image: 'https://d259o9es2o749h.cloudfront.net/wp-content/uploads/2023/06/02084212/YEC_5524-1024x683.jpg', 
//      description: ' Step into a world of enchantment and elegance with a Barbie-themed birthday celebration fit for a princess! Transform your party venue into a dreamy pink paradise adorned with Barbies signature glamor. From shimmering decorations to Barbies iconic silhouette, every detail creates a magical ambiance.' },
     
        
//   ]);

//   // Function to handle college addition
//   const handleAddCollege = () => {
//     const newCollege = {
//       id: Date.now(),
//       name: prompt('Enter new name:'),
//       image: prompt('Enter new image URL:'),
//       description: prompt('Enter new description:'),
//     };

//     setColleges([...colleges, newCollege]);
//   };

//   // Function to handle college deletion
//   const handleDeleteCollege = (id) => {
//     const updatedColleges = colleges.filter((college) => college.id !== id);
//     setColleges(updatedColleges);
//   };

//   // Function to handle college update
//   const handleUpdateCollege = (id, newName, newImage, newDescription) => {
//     const updatedColleges = colleges.map((college) =>
//       college.id === id
//         ? {
//             ...college,
//             name: newName,
//             image: newImage,
//             description: newDescription,
//           }
//         : college
//     );
//     setColleges(updatedColleges);
//   };

//   return (
//     <>
//     <AdminNavbar/>
//     <div style={{ textAlign: 'center' }}>
//       <CollegeList colleges={colleges} isAdmin onDelete={handleDeleteCollege} onUpdate={handleUpdateCollege} />
//       <div style={{ marginTop: '20px' }}>
//         <h2>ADD Theme</h2>
//         <button onClick={handleAddCollege} style={{backgroundColor:'green'}}>Add</button>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Admin;
// Admin.jsx
// Admin.jsx
// Admin.jsx
import React, { useState } from 'react';
import CollegeList from './CollegeList';
import AdminNavbar from '../component/AdminNavbar';
import './Admin.css';

const Admin = () => {
  // State to manage the list of colleges
  const [colleges, setColleges] = useState([
    {
      id: 1,
      name: 'Avengers based Theme',
      image: 'https://woogle.co.in/cdn/shop/files/avengers-party-theme-185_1024x1024.webp?v=1683089456',
      description:
        'Transform your birthday celebration into an epic adventure with an Avengers-themed party! Assemble your friends and family to embark on a day filled with superhero excitement. Decorate your space with vibrant colors, action-packed banners, and iconic symbols of Earths mightiest heroes. Imagine the thrill as young partygoers discover a world where Spider-Man swings from the walls, Iron Mans suit gleams in the party lights, and Captain Americas shield stands tall as a centerpiece.',
    },
    {
      id: 2,
      name: 'Barbie based theme',
      image: 'https://d259o9es2o749h.cloudfront.net/wp-content/uploads/2023/06/02084212/YEC_5524-1024x683.jpg',
      description:
        ' Step into a world of enchantment and elegance with a Barbie-themed birthday celebration fit for a princess! Transform your party venue into a dreamy pink paradise adorned with Barbies signature glamor. From shimmering decorations to Barbies iconic silhouette, every detail creates a magical ambiance The venue is transformed into a dreamy pink paradise, adorned with shimmering decorations, balloons, and elegant touches reminiscent of Barbies world. Guests, dressed in their finest attire, are welcomed to partake in a day of enchantment and wonder The air is filled with laughter and joy as activities such as a fashion show, doll-themed crafts.',
    },
  ]);

  // Function to handle college addition
  const handleAddCollege = () => {
    const newCollege = {
      id: Date.now(),
      name: prompt('Enter new name:'),
      image: prompt('Enter new image URL:'),
      description: prompt('Enter new description:'),
    };

    setColleges([...colleges, newCollege]);
  };

  // Function to handle college deletion
  const handleDeleteCollege = (id) => {
    const updatedColleges = colleges.filter((college) => college.id !== id);
    setColleges(updatedColleges);
  };

  // Function to handle college update
  const handleUpdateCollege = (id, newName, newImage, newDescription) => {
    const updatedColleges = colleges.map((college) =>
      college.id === id
        ? {
            ...college,
            name: newName,
            image: newImage,
            description: newDescription,
          }
        : college
    );
    setColleges(updatedColleges);
  };

  return (
    <>
      <AdminNavbar />
      <div className="card-container">
        {colleges.map((college) => (
          <div key={college.id} className="card">
            <img src={college.image} alt={college.name} />
            <h2>{college.name}</h2>
            <p>{college.description}</p>
            <div className="card-actions">
              <button onClick={() => handleUpdateCollege(college.id, prompt('Enter new name:'), prompt('Enter new image URL:'), prompt('Enter new description:'))}>Edit</button><br></br>
              <button onClick={() => handleDeleteCollege(college.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-button">
        
        <button onClick={handleAddCollege}>Add</button>
      </div>
    </>
  );
};

export default Admin;

