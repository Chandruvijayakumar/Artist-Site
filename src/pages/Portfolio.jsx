import React from "react";
import "../css/Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-intro">
        <h2>Our Portfolio</h2>
        <p>
          Explore a selection of our most recent and notable projects. We take
          pride in our work and strive for excellence in every project we
          undertake.
        </p>
      </div>
      <div className="portfolio-gallery">
        <div className="portfolio-item">
          <img src="project1.jpg" alt="Project 1" />
          <div className="portfolio-item-info">
            <h3>Project Title 1</h3>
            <p>
              Brief description of the project. This includes the problem we
              solved, the technologies used, and the impact of the project.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div className="portfolio-item">
          <img src="project2.jpg" alt="Project 2" />
          <div className="portfolio-item-info">
            <h3>Project Title 2</h3>
            <p>
              Brief description of the project. This includes the problem we
              solved, the technologies used, and the impact of the project.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div className="portfolio-item">
          <img src="project3.jpg" alt="Project 3" />
          <div className="portfolio-item-info">
            <h3>Project Title 3</h3>
            <p>
              Brief description of the project. This includes the problem we
              solved, the technologies used, and the impact of the project.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div className="portfolio-item">
          <img src="project4.jpg" alt="Project 4" />
          <div className="portfolio-item-info">
            <h3>Project Title 4</h3>
            <p>
              Brief description of the project. This includes the problem we
              solved, the technologies used, and the impact of the project.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
      </div>
      <div className="portfolio-about">
        <h2>About the Team</h2>
        <div className="team-member">
          <img src="team-member1.jpg" alt="Team Member 1" />
          <div className="team-member-info">
            <h3>Jane Doe</h3>
            <p>
              Lead Designer with 10 years of experience in creating stunning and
              effective designs for clients worldwide.
            </p>
          </div>
        </div>
        <div className="team-member">
          <img src="team-member2.jpg" alt="Team Member 2" />
          <div className="team-member-info">
            <h3>John Smith</h3>
            <p>
              Senior Developer specializing in front-end development and user
              experience. Passionate about building efficient and user-friendly
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
