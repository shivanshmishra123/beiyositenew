import React from 'react'
import './About.css'
const About = () => {
  return (
    <div>
       <div className="AboutPage">
   <div className="Heading">
       <h1>Why We </h1>
       <h2>are doing it !</h2>
   </div>
   <div className="PageArticle">
       <div id="TextContent">
           <p>IN OUR SEARCH</p>
           <br/>
           <p>WE COULDN'T <span id="Letter">L</span>OCATE IT,</p>
           <br/>
           <p>So WE <span id="Letter">C</span>RAFTED IT FOR <span id="Letter">YOU</span></p>
       </div>
       <div id="ImageContent">
           <img className="AboutImage" src="./images/aboutuspng.png" alt="Team Image"/>
       </div>
   </div>
   <div id="AboutContent">
  <div className="subaboutcontent">
    <div className="subparacontent">
        <h1>Confined PGs?</h1>
        <p>Feel trapped in limited housing options?</p>
        <p>Beiyo offers a haven.</p>
        <p>Crafted by those who understand.</p>
        <p>Step into comfort, step into Beiyo Rooms.</p>
    </div>
    <div className="subparacontent" >
        <h1>Escape to Beiyo !</h1>
        <p>Bid farewell to cramped quarters.</p>
        <p>Embrace spacious, welcoming spaces.</p>
        <p>Created by fellow travelers.</p>
        <p>Experience a new standard in accommodation.</p>
    </div>
  </div>
  <div className="subaboutcontent">
  <div className="subparacontent">
    <h1>Beiyo: Your Sanctuary</h1>
    <p>Feel trapped in limited housing options?</p>
    <p>Beiyo Living offers a haven.</p>
    <p>Crafted by those who understand.</p>
    <p>Step into comfort, step into Beiyo Living.</p>
  </div>
    <div className="subparacontent"  >
        <h1>Beiyo: Where Comfort Awaits</h1>
        <p>Leave cramped hostels behind.</p>
        <p>Discover a refuge in Beiyo Living.</p>
        <p>Crafted by empathetic souls.</p>
        <p>Your comfort is our priority.</p>
    </div>
  </div>
   </div>
</div>
</div>
  )
}

export default About