import React from "react";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-card">
        <img src="client1.jpg" alt="Client 1" />
        <h3>John Doe</h3>
        <p>"The artwork is amazing! Highly recommended."</p>
      </div>
      <div className="testimonial-card">
        <img src="client2.jpg" alt="Client 2" />
        <h3>Jane Smith</h3>
        <p>"Excellent service and beautiful designs."</p>
      </div>
    </section>
  );
}

export default Testimonials;
