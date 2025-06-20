import React, { useState } from "react";
import "./Hero.css";

const backgroundImages = [
  "https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Group-8049-1.jpg", // Before
  "https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/61.jpg", // Main
  "https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Group-8049.jpg", // Next
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the main photo

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === backgroundImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.7)30%, rgba(0, 0, 0, 0)100%),url(${backgroundImages[currentIndex]})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>
            Suppliers of the <br /> finest produce
          </h1>
          <p>Cambridgeshire’s wholesale fresh fruit and vegetable supplier.</p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-green">
              <span>Become a customer</span>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
            <a href="#" className="btn btn-grey">
              <span>Get in touch</span>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </div>
        </div>

        <div className="slider-arrows">
          <span className="arrow" onClick={handlePrev}>
            <ion-icon name="chevron-back-sharp"></ion-icon>
          </span>
          <span className="arrow" onClick={handleNext}>
            <ion-icon name="chevron-forward"></ion-icon>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
