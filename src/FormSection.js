import React, { useEffect, useRef, useState } from "react";
import "./FormSection.css";

function FormSection() {
  const [isAgreed, setIsAgreed] = useState(false);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        window.grecaptcha &&
        recaptchaRef.current &&
        !recaptchaRef.current.hasChildNodes()
      ) {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: "6LeAA2YrAAAAAKDZBBQYEKnnckHXWf6FZ0HSyy50",
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCheckboxChange = () => {
    setIsAgreed((prev) => !prev);
  };

  return (
    <section className="form-background-img">
      <div className="form-section">
        <div className="heading-part">
          <h2 className="form-heading">
            Sign up for<br></br> our newsletter
          </h2>
          <p className="form-subtitle">
            Get our latest news, insights and service updates, sent straight to
            your inbox
          </p>
        </div>
        <div className="form-part">
          <div className="line-part">
            <label>First Name</label>
            <div className="input-part">
              <input
                type="text"
                placeholder="Enter your first name"
                required
              ></input>
              <p>Please fill out this field.</p>
            </div>
          </div>

          <div className="line-part">
            <label>Last Name</label>
            <div className="input-part">
              <input
                type="text"
                placeholder="Enter your Last name"
                required
              ></input>
              <p>Please fill out this field.</p>
            </div>
          </div>

          <div className="line-part">
            <label>Company</label>
            <div className="input-part">
              <input
                type="text"
                placeholder="Enter your company's name"
                required
              ></input>
              <p>Please fill out this field.</p>
            </div>
          </div>

          <div className="line-part">
            <label>Email</label>
            <div className="input-part">
              <input
                type="email"
                placeholder="Enter your email address"
                required
              ></input>
              <p>Please fill out this field.</p>
            </div>
          </div>

          <div className="recaptcha-wrapper" ref={recaptchaRef}></div>

          <div className="checkbox-part">
            <input
              type="checkbox"
              id="agree"
              checked={isAgreed}
              onChange={handleCheckboxChange}
            />
            <label className="agree">
              I agree to receive email communication from Kale & Damson. For
              more information please refer to our&nbsp;
              <a href="#">Privacy Policy</a>
            </label>
            <button
              type="submit"
              disabled={!isAgreed}
              className="form-submit-btn"
            >
              Subscribe <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FormSection;
