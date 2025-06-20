import React from "react";
import "./SupplySection.css";
function SupplySection() {
  return (
    <div class="left-decor">
      <div className="supply-section">
        <h2 className="supply-heading">Who we work with</h2>
        <p className="supply-subheading">
          We supply a wide range of catering sectors, including those listed
          below and many more.
        </p>
        <div className="supply-icons">
          <div className="icon-element">
            <img
              decoding="async"
              className="supply-icon"
              role="img"
              src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Restaurants.svg"
              alt=""
              width="300"
              height="300"
            />

            <span className="icon-text">Restaurants</span>
          </div>

          <div className="icon-element">
            <img
              decoding="async"
              className="supply-icon"
              role="img"
              src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Schools-Colleges.svg"
              alt=""
              width="300"
              height="300"
            />

            <span className="icon-text">Schools & Colleges</span>
          </div>

          <div className="icon-element">
            <img
              decoding="async"
              className="supply-icon"
              role="img"
              src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Hotels.svg"
              alt=""
              width="300"
              height="300"
            ></img>

            <span className="icon-text">Hotels</span>
          </div>

          <div className="icon-element">
            <img
              decoding="async"
              className="supply-icon"
              role="img"
              src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Conference-Centres.svg"
              alt=""
              width="300"
              height="300"
            ></img>

            <span className="icon-text">Conference Centres</span>
          </div>

          <div className="icon-element">
            <img
              decoding="async"
              className="supply-icon"
              role="img"
              src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Pubs.svg"
              alt=""
              width="300"
              height="300"
            ></img>

            <span className="icon-text">Pubs</span>
          </div>
        </div>
        <div className="supply-btn">
          <a href="#" className="btn btn-green">
            <span>Who we supply</span>
            <ion-icon
              role="img"
              class="md hydrated"
              name="chevron-forward-outline"
            ></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}
export default SupplySection;
