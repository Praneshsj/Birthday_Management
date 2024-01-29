import React, { useEffect, useState } from 'react';
import './Home.css';
import '../assets/photo/peakpx.jpg';
import bvideo from '../assets/photo/bvideo.mp4'
import slide1 from"../assets/photo/slide1.gif"
import slide2 from"../assets/photo/slide1.gif"
import slide3 from"../assets/photo/slide1.gif"
import Hometag from "../assets/photo/Hometag.png"
import kidpic from "../assets/photo/kidpic.png"
import teenpic from"../assets/photo/teenpic.png"
import man from "../assets/photo/manpic.png"
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom';


function Home() {
  const images = [slide1,slide2,slide3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => {
        if (currentIndex=== images.length - 1) {
          return 0;
        } else {
          return currentIndex + 1;
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
    <Navbar/>
    <div className='FullHome'>
    <br></br><br></br>
    <div className='HomeContainer'>
      <h2>    EASY FOR PARENTS</h2>
     <div className='hometag'>
      <img src={Hometag }></img>

     </div> 
    </div>
    <br></br>
    <center>
      <div className="image-container"> 
        <img src={images[currentIndex]} alt="images" />
      </div>
      </center>
    <br></br>
    <div className="container">
    <div className='videobox'> 
    <video width='500' height='400' src={bvideo} autoPlay loop muted />
    </div>
    <div className='Txt'><p>""SJP Celeb Event Management created an unforgettable birthday 
    celebration with impeccable decor and personalized service—truly exceptional!""</p></div>
    </div>
    <div className='home-container2'>
    <h1>BEST PRICE</h1>
    <div className='display-container'>
    <div className='sub-container1'>
    <h1>Under 10 age</h1>
    <div className='sub-container2'>
    <img src={kidpic }></img>
    </div>
    </div>&nbsp;
    
    
    <div className='sub-container1'>
    <h1>Under 20 age</h1>
    <div className='ub-container2'>
    <img src={teenpic }></img>
    </div>
    </div>&nbsp;
    <div className='sub-container1'>
    <h1>Above 20 age</h1>
    <div className='su-container2'>
    <img src={man }></img>
    </div>
    </div>  
    
    </div>
      <div className='learnmore'>
      {/* <Link to="/Login">Login</Link> */}
      <button class="button button1"><Link to="/LearnMore">Learn More</Link></button>
      
    </div>
    </div>
  
    </div>
    <footer style={{ backgroundColor: 'moccasin', padding: '20px', textAlign: 'center', marginTop: '50px' }}>
                <h2 style={{ color: '#333', marginBottom: '10px' }}>Sjp Celeb</h2>
                <p>221 Bakery Street, New York, USA<br />+012 345 67890<br />info@example.com</p>
            </footer>
    </>
    
  );
}

export default Home;

