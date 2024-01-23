import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Homestyles/mainfeature.css'
const RaceComponent = () => {
  const racesRef = useRef(null);

  useEffect(() => {
    // Enable ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const races = racesRef.current;

    // Function to calculate scroll amount
    const getScrollAmount = () => {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    // GSAP Tween animation
    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: 'none',
    });

    // ScrollTrigger configuration
    ScrollTrigger.create({
      trigger: '.racesWrapper',
      start: 'top 0%',
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true,
    });

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array ensures that the effect runs once on mount

  return (
    <div>
      {/* Your races wrapper element */}
      <div className="racesWrapper">
        <div ref={racesRef} className="races">
    <div className="componets">
        <h1>Introducing <br /> Commune</h1>
        <div className="componentfirst">
          <p>Take part in <br />
        any Conversation <br />
      that interests you, <br />
        with Our Community</p>
            <img src="/images/firstmobile.svg" alt="" />
        </div>
    </div>
    <div className="componets">
    <div className="componentsecond">
          <p>Take part in <br />
any Conversation <br />
that interests you, <br />
with Our Community</p>
            <img src="/images/secondMobile.svg" alt="" />
        </div>
    </div>
    <div className="componets">
    <div className="componentthird">
          <p>Take part in <br />
any Conversation <br />
that interests you, <br />
with Our Community</p>
            <img src="/images/thirdMobile.svg" alt="" />
        </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default RaceComponent;

