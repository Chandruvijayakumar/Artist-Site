import React from "react";
import "../App.css";

function Blog() {
  return (
    <section className="blog">
      <h2>Latest Blog Posts</h2>
      <div className="blog-post">
        <h2>How to Choose the Right Colors for Your Design</h2>
        <p>
          Learn how to select the perfect color palette for your next project.
        </p>
        <a href="/">Read more</a>
      </div>
      <div className="blog-post">
        <h2>5 Tips for Improving Your Drawing Skills</h2>
        <p>
          Discover simple yet effective techniques to enhance your drawing
          abilities.
        </p>
        <a href="/">Read more</a>
      </div>
    </section>
  );
}

export default Blog;
