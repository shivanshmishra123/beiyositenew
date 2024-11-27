import React from "react";
import "./Homestyles/FaqMobile.css";
const FaqMobile = () => {
  return (
    <div className="faqMobile bg-gray-100 mt-0">
      <h1 className="text-4xl">FAQ</h1>
      <div className="questionsAnswers">
        <button className="questionMobile" onClick={click1}>
        What is Beiyo and why it's different from others?
        </button>
        <div className="answerMobile" id="oneMobile">
          <p></p>
        </div>
        <button className="questionMobile" onClick={click2}>How does Beiyo contribute to a
positive community environment?</button>
        <div className="answerMobile" id="twoMobile">
          <p></p>
        </div>
        <button className="questionMobile" onClick={click3}>
        How can I get Beiyo's services for my hostel or PG?
        </button>
        <div className="answerMobile" id="threeMobile">
          <p></p>
        </div>
        <button className="questionMobile" onClick={click4}>
        How does Beiyo work with PG and
hostel owners?
        </button>
        <div className="answerMobile" id="fourMobile">
          <p></p>
        </div>
        <button className="questionMobile" onClick={click5}>
        Refer and Earn
        </button>
        <div className="answerMobile" id="fiveMobile">
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default FaqMobile;

function click1() {
  document.querySelector("#oneMobile p").innerHTML =
    "BEIYO stands as the ultimate answer to all your accommodation needs during your journey, offering an unparalleled co-living experience at the most budget-friendly prices.";
  document
    .querySelector("#oneMobile")
    .setAttribute(
      "style",
      "height: auto;border: 1px solid #000;padding: 1rem;"
    );


    document
    .querySelector("#twoMobile")
    .setAttribute(
      "style",
      "height: 0;border: 0;padding: 0rem;"
    );
    document
    .querySelector("#threeMobile")
    .setAttribute(
      "style",
      "height: 0;border: 0;padding: 0rem;"
    );
    document
    .querySelector("#fourMobile")
    .setAttribute(
      "style",
      "height: 0;border: 0;padding: 0rem;"
    );
    document
    .querySelector("#fiveMobile")
    .setAttribute(
      "style",
      "height: 0;border: 0;padding: 0rem;"
    );
}
function click2() {
    document.querySelector("#twoMobile p").innerHTML = 
      "Beiyo promotes inclusivity, diversity, and collaboration, creating a safe and supportive space for individuals to connect and engage positively with one another, fostering a sense of community and unity.";
    document
      .querySelector("#twoMobile")
      .setAttribute(
        "style",
        "height: auto;border: 1px solid #000;padding: 1rem;"
      );
  
  
      document
      .querySelector("#oneMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#threeMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#fourMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#fiveMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
  }

  function click3() {
    document.querySelector("#threeMobile p").innerHTML =
      "To avail Beiyo's services for your hostel or PG, you have multiple convenient options. You can easily reach out to us via phone call or email. Additionally, you can explore the 'List Your Property' option provided in the navigation bar of our website.";
    document
      .querySelector("#threeMobile")
      .setAttribute(
        "style",
        "height: auto;border: 1px solid #000;padding: 1rem;"
      );
  
  
      document
      .querySelector("#twoMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#oneMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#fourMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#fiveMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
  }

  function click4() {
    document.querySelector("#fourMobile p").innerHTML =
      "We partner with PG and hostel owners to renovate rooms and enhance facilities, offering a modern and comfortable living experience.";
    document
      .querySelector("#fourMobile")
      .setAttribute(
        "style",
        "height: auto;border: 1px solid #000;padding: 1rem;"
      );
  
  
      document
      .querySelector("#twoMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#threeMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#oneMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#fiveMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
  }

  function click5() {
    document.querySelector("#fiveMobile p").innerHTML =
      "Recommend BEIYO to your friends and receive a 10% commission on the first month's rental cost for each successful referral.";
    document
      .querySelector("#fiveMobile")
      .setAttribute(
        "style",
        "height: auto;border: 1px solid #000;padding: 1rem;"
      );
  
  
      document
      .querySelector("#twoMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#threeMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#fourMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
      document
      .querySelector("#oneMobile")
      .setAttribute(
        "style",
        "height: 0;border: 0;padding: 0rem;"
      );
  }