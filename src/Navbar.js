import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // 50px threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // for toggleMenu button
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // for mobile dropdown menu
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleDropdownToggle = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <a href="#">
          <img
            width="1054"
            height="80"
            src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/logoBig.png"
            class="logo-img"
            alt="Kale &amp; Damson"
            decoding="async"
            srcset="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/logoBig.png 1054w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/logoBig-300x23.png 300w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/logoBig-1024x78.png 1024w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/logoBig-768x58.png 768w"
            sizes="(max-width: 1054px) 100vw, 1054px"
          ></img>
        </a>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="dropdown">
          <a href="#about">
            About <ion-icon name="chevron-down-outline"></ion-icon>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Our story</a>
            </li>
            <li>
              <a href="#">Mission & values</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Vacancies</a>
            </li>
            <li>
              <a href="#">Crop Report</a>
            </li>
            <li>
              <a href="#">Latest news</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#range">
            Our range <ion-icon name="chevron-down-outline"></ion-icon>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Our produce range</a>
            </li>
            <li>
              <a href="#">Our suppliers </a>
            </li>
            <li>
              <a href="#">Best of British</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#customers">
            Our customers <ion-icon name="chevron-down-outline"></ion-icon>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Distribution</a>
            </li>
            <li>
              <a href="#">Who we supply</a>
            </li>
            <li>
              <a href="#">How to order</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-contact">
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📞</span>
            <a href="tel:01223755547" className="phone-link">
              01223 755547
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:info@kaleanddamson.co.uk">
              <span className="icon">✉️</span>
            </a>
          </div>
        </div>

        <div className="nav-buttons">
          <a href="/order" className="btn btn-grey">
            Order online
          </a>
          <a href="/signup" className="btn btn-green">
            Become a customer
          </a>
        </div>
      </div>

      {/* Mobile side panel */}
      <div className={`mobile-menu-panel ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links mobile">
          <li>
            <a href="#">Home</a>
          </li>
          <li className={openDropdown === "about" ? "active" : ""}>
            <a href="#" onClick={() => handleDropdownToggle("about")}>
              About <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <ul
              className={`mobile-dropdown-menu ${
                openDropdown === "about" ? "open" : ""
              }`}
            >
              <li>
                <a href="#">Our story</a>
              </li>
              <li>
                <a href="#">Mission & values</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Vacancies</a>
              </li>
              <li>
                <a href="#">Crop Report</a>
              </li>
              <li>
                <a href="#">Latest news</a>
              </li>
            </ul>
          </li>
          <li className={openDropdown === "range" ? "active" : ""}>
            <a href="#" onClick={() => handleDropdownToggle("range")}>
              Our range <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <ul
              className={`mobile-dropdown-menu ${
                openDropdown === "range" ? "open" : ""
              }`}
            >
              <li>
                <a href="#">Our produce range</a>
              </li>
              <li>
                <a href="#">Our suppliers </a>
              </li>
              <li>
                <a href="#">Best of British</a>
              </li>
            </ul>
          </li>
          <li className={openDropdown === "customers" ? "active" : ""}>
            <a href="#" onClick={() => handleDropdownToggle("customers")}>
              Our customers <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <ul
              className={`mobile-dropdown-menu ${
                openDropdown === "customers" ? "open" : ""
              }`}
            >
              <li>
                <a href="#">Distribution</a>
              </li>
              <li>
                <a href="#">Who we supply</a>
              </li>
              <li>
                <a href="#">How to order</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="nav-contact mobile">
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📞</span>
              <a href="tel:01223755547" className="phone-link">
                01223 755547
              </a>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <a href="mailto:info@kaleanddamson.co.uk" className="phone-link">
                info@kaleanddamson.co.uk
              </a>
            </div>
          </div>

          <div className="nav-buttons">
            <a href="/order" className="btn btn-grey">
              Order online
            </a>
            <a href="/signup" className="btn btn-green">
              Become a customer
            </a>
          </div>
        </div>
      </div>
      {/* used to add some greadient backside of the menu-bu  */}
      <div className="menu-overlay-grad"></div>
      <button
        class={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
      </button>
    </nav>
  );
}

export default Navbar;
