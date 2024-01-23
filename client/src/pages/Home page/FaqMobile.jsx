import React from "react";
import "./Homestyles/FaqMobile.css";
const FaqMobile = () => {
  return (
    <div className="faqMobile">
      <h1>FAQ</h1>
      <div className="questionsAnswers">
        <button className="questionMobile" onClick={click1}>
          How does Beiyo work with PG and hostel owners?
        </button>
        <div className="answerMobile" id="oneMobile">
          <p></p>
        </div>
        <button className="questionMobile" onClick={click2}>What makes Beiyo different?</button>
        <div className="answerMobile" id="twoMobile">
          <p></p>
        </div>
        <button className="questionMobile" onClick={click3}>
          How does Beiyo contribute to a positive community atmosphere?
        </button>
        <div className="answerMobile" id="threeMobile">
          <p></p>
        </div>
        <button className="questionMobile" onClick={click4}>
          How can I get Beiyo's services for my hostel or PG?
        </button>
        <div className="answerMobile" id="fourMobile">
          <p></p>
        </div>
        <button className="questionMobile" onClick={click5}>
          How does Beiyo work with PG and hostel owners?
        </button>
        <div className="answerMobile" id="fiveMobile">
          <p></p>
        </div>
      </div>
      <img src="images\Ellipse 6.png" alt="" className="randomfooterelem" />
    </div>
  );
};
export default FaqMobile;

function click1() {
  document.querySelector("#oneMobile p").innerHTML =
    "Bluelearn is a community where you can learn skills, network with smart people, and find work. Download the bluelearn app to find all these opportunities.";
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
      "Bluelearn is a community where you can learn skills, network with smart people, and find work. Download the bluelearn app to find all these opportunities.";
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
      "Bluelearn is a community where you can learn skills, network with smart people, and find work. Download the bluelearn app to find all these opportunities.";
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
      "Bluelearn is a community where you can learn skills, network with smart people, and find work. Download the bluelearn app to find all these opportunities.";
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
      "Bluelearn is a community where you can learn skills, network with smart people, and find work. Download the bluelearn app to find all these opportunities.";
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