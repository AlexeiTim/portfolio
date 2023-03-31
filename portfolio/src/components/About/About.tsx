import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div data-aos="fade-right" className="about-img photo"></div>
      <div data-aos="fade-left" className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend developer!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum vitae nostrum tenetur
          vel! Dolor, numquam! Dolorum praesentium debitis modi optio iure. Optio alias ad esse
          laudantium.
        </p>
        <a href="#" className="btn">
          Read more
        </a>
      </div>
    </section>
  );
};

export default About;
