import React from "react";
import "./TestimonialSection.css";
function TestimonialSection() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-inner-section">
        <h2 className="testi-heading">What our customers say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              <span>
                I have always found Kale &amp; Damson to be a very reliable and
                efficient supplier of quality produce.
              </span>
            </p>
            <p>
              <span>
                They have generations of experience and specialise in
                sourcing...
              </span>
            </p>

            <div className="customer">
              Paul <span className="divider">|</span> New Market Racecourses,
              Suffolk
            </div>
          </div>

          <div className="testimonial">
            <p>
              <span>
                I have a great relationship with Kale &amp; Damson. I can easily
                connect with the team to get information on when the latest
                seasonal produce is coming in,...
              </span>
            </p>
            <div className="customer">
              Andrew <span className="divider">|</span> Kings Ely Suffolk
            </div>
          </div>

          <div className="testimonial">
            <p>
              <span>
                We have been working with Kale &amp; Damson for 6.5 years now.
                The quality of produce is excellent, customer service faultless,
                and their willingness to go the extra...
              </span>
            </p>
            <div className="customer">
              Sam <span className="divider">|</span> Restaurant 22, Cambridge
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestimonialSection;
