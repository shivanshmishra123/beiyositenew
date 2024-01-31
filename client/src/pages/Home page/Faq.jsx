import React from 'react'
import './Homestyles/Faq.css'
const Faq = () => {
    const click1 = () => {
        document.querySelector(".answerdivs p").innerHTML="BEIYO stands as the ultimate answer to all your accommodation needs during your journey, offering an unparalleled co-living experience at the most budget-friendly prices."
        document.querySelector("#one").setAttribute(  "style", "color:white; background-color:black")
        document.querySelector("#two").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#three").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#four").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#five").setAttribute(  "style", "color:black; background-color:transparent")
    }
    const click2 = () => {
        document.querySelector(".answerdivs p").innerHTML="BEIYO collaborates with hostel and PG owners to elevate their facilities from grade 3 ratings to grade 1 standards. We take charge of comprehensive property management, ensuring tenants an unforgettable and seamless experience."
        document.querySelector("#one").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#two").setAttribute(  "style", "color:white; background-color:black") 
        document.querySelector("#three").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#four").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#five").setAttribute(  "style", "color:black; background-color:transparent")
    }
    const click3 = () =>{
        document.querySelector(".answerdivs p").innerHTML="."
        document.querySelector("#three").setAttribute(  "style", "color:white; background-color:black")
        document.querySelector("#two").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#one").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#four").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#five").setAttribute(  "style", "color:black; background-color:transparent")
    }
    const click4 = () =>{
        document.querySelector(".answerdivs p").innerHTML="."
        document.querySelector("#four").setAttribute(  "style", "color:white; background-color:black")
        document.querySelector("#two").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#three").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#one").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#five").setAttribute(  "style", "color:black; background-color:transparent")
    }
    const click5 = () =>{
        document.querySelector(".answerdivs p").innerHTML="Recommend BEIYO to your friends and receive a 10% commission on the first month's rental cost for each successful referral."
        document.querySelector("#five").setAttribute(  "style", "color:white; background-color:black")
        document.querySelector("#two").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#three").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#four").setAttribute(  "style", "color:black; background-color:transparent")
        document.querySelector("#one").setAttribute(  "style", "color:black; background-color:transparent")
    }
    
  return (
  <div className="faqmain">
     <div className="faq">
    <div className="questions">
        <h1>FAQ</h1>
        <div className="questionsdiv">
        <button className="questionpara" id='one' onClick={click1}>What is Beiyo and why it's different
from others?</button>
            <button className="questionpara" id='two' onClick={click2}>How does Beiyo contribute to a
positive community environment?</button>
            <button className="questionpara" id='three' onClick={click3}>How can I get Beiyo's services for my
hostel or PG?</button>
            <button className="questionpara" id='four' onClick={click4}>How does Beiyo work with PG and
hostel owners?</button>
            <button className="questionpara" id='five' onClick={click5}>Refer and Earn</button>       
        </div>
    </div>
    <div className="answers">
        <h1>Answers</h1>
        <div className="answerdivs">
         <p>
         BEIYO collaborates with hostel and PG owners to elevate their facilities from grade 3 ratings to grade 1 standards. We take charge of comprehensive property management, ensuring tenants an unforgettable and seamless experience.
         </p>
        </div>
    </div>
   </div>
  {/* <img src="images\Ellipse 6.png" alt="" className="randomfooterelem" /> */}
  </div>
  )
}

export default Faq



