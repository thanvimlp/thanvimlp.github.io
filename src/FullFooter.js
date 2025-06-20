import React from "react";
import "./FullFooter.css";

function FullFooter() {
  return (
    <footer className="big-footer">
      <div className="fullfooter-section">
        <div className="fullfooter-part">
          <h3>Follow us</h3>
          <div className="follow-icons">
            <a href="#" className="follow-icon">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#" className="follow-icon">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className="follow-icon">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" className="follow-icon">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>

        <div className="fullfooter-part">
          <h3>About</h3>
          <a href="#" className="fullfooter-links">
            Our Story
          </a>
          <a href="#" className="fullfooter-links">
            Mission &amp; values
          </a>
          <a href="#" className="fullfooter-links">
            Sustainability
          </a>
          <a href="#" className="fullfooter-links">
            Vacancies
          </a>
          <a href="#" className="fullfooter-links">
            Latest news
          </a>
        </div>

        <div className="fullfooter-part">
          <h3>Our Range</h3>
          <a href="#" className="fullfooter-links">
            Our suppliers
          </a>
          <a href="#" className="fullfooter-links">
            Our produce range
          </a>
          <a href="#" className="fullfooter-links">
            Best of British
          </a>
        </div>
        <div className="fullfooter-part">
          <h3>Our customers</h3>
          <a href="#" className="fullfooter-links">
            Who we supply
          </a>
          <a href="#" className="fullfooter-links">
            Distribution
          </a>
          <a href="#" className="fullfooter-links">
            Become a customer
          </a>
          <a href="#" className="fullfooter-links">
            How to order
          </a>
        </div>

        <div className="fullfooter-part">
          <h3>Contact</h3>
          <div className="contact-item">
            <span className="icon">📞</span>
            <a href="tel:01223755547" className="phone-link">
              01223 755547
            </a>
          </div>
          <div className="contact-email-item">
            <span className="icon">
              <ion-icon className="email-icon" name="mail-outline"></ion-icon>
            </span>
            <a
              href="mailto:info@kaleanddamson.co.uk"
              className="email-link fullfooter-links"
            >
              info@kaleanddamson.co.uk
            </a>
          </div>
          <div className="location-part">
            <span>
              <ion-icon name="location"></ion-icon>
            </span>
            <p className="address">
              K & D Central Depot5 Cambridge Westpoint Cambridgeshire CB23 3GY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default FullFooter;
