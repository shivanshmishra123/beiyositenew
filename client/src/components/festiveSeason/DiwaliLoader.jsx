import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Button } from "@/components/ui/button";
import './DiwaliLoader.css'; // Include your custom styles

const DiwaliLoader = ({ onComplete }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const duration = 2000; // Show loader for 4 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setShowLoader(false);
        onComplete(); // Call the onComplete callback after the animation
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [onComplete]);

  if (!showLoader) return null;

  return (
    <div className="diwali-loader">
      <h1 className="diwali-text">✨ Happy Diwali! Wishing You Light, Prosperity, and Joy ✨</h1>
      <p className="diwali-message">May this festival of lights bring joy and prosperity to you and your family!</p>
    </div>
  );
};

export default DiwaliLoader;
