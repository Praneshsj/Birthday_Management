import React from 'react'
import './LearnMore.css';
import kparty from"../assets/photo/kparty.jpg"
import tparty from"../assets/photo/tparty.jpg"
import aparty from"../assets/photo/aparty.jpg"
import Navbar from '../component/Navbar'

function Learnmore() {
  return (
   <>
   <Navbar/>
 
   <br></br>
   <div className='kparty'>
   <h2>Kids Birthday Party</h2>
      <p>
        Kids birthday parties are filled with fun and excitement! Common elements include colorful decorations, themed
        cakes, games like pin the tail on the donkey, and perhaps a magician or clown to entertain the little ones.
      </p>
      <p>
        Entertainment is geared towards keeping the little ones engaged and excited. Activities may include traditional
        games like musical chairs, pin the tail on the donkey, and a piñata filled with candies and treats. Magicians,
        clowns, or characters in costume add an extra layer of enchantment.
      </p>
      <p>
        A dedicated play area with age-appropriate toys and activities ensures that every child has a blast. Party favors
        are a must, usually consisting of small toys and goodies that leave the young guests with smiles on their faces.
      </p>
      <div className='kpartypic'>
      <img src={kparty }></img>
      </div>
      </div>
      <br></br>
      <div className='tparty'>
      <h2>Teen Birthday Party</h2>
      <p>
        Teen birthday parties often feature trendy themes, music, and a lively atmosphere. Activities may include
        dancing, karaoke, and interactive games. Teenagers may also enjoy having a photo booth for capturing memories.
      </p>
      <p>
        Interactive activities take center stage, with dance floors for grooving, karaoke setups for singing talents to
        shine, and maybe even a gaming console area for video game enthusiasts. Photo booths with props add a fun
        element and capture memorable moments.
      </p>
      <p>
        Food options are diverse, catering to teenage preferences. A birthday cake may be complemented by a dessert bar
        with treats like cupcakes, cookies, and a variety of snacks. Party favors might include personalized items or
        tech gadgets.
      </p>
      <div className='tpartypic'>
      <img src={tparty }></img>
      </div>
      </div>
      <br></br>
      <div className='aparty'>
      <h2>Adult Birthday Party</h2>
      <p>
        Adult birthday parties can range from casual gatherings to more formal events. Common elements include
        decorations, delicious food and drinks, music, and perhaps some party games or activities. Themes and
        entertainment may vary based on the preferences of the birthday person.
      </p>
      <p>
        The focus is on creating a sophisticated yet relaxed atmosphere. Guests can enjoy a variety of delectable dishes,
        signature cocktails, and a well-curated playlist. Decorations, while elegant, can still carry a touch of
        playfulness.
      </p>
      <p>
        Entertainment options for adult parties are diverse and may include live music, a hired DJ, or even a game night
        with board games or casino-themed activities. Party favors often lean towards the practical, such as custom
        keepsakes, wine glasses, or gourmet treats.
      </p>
      <div className='apartypic'>
      <img src={aparty }></img>
      </div>
      </div>
   </>
  )
}

export default Learnmore