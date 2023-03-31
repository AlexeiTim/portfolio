import React from 'react';
import TypedTitle from '../TypedTitle/TypedTitle';

const Home = () => {
  return (
    <section className="home" id="home">
      <div data-aos="fade-right" className="home-content">
        <h3>Hello, It's me</h3>
        <h1>Alexei Tsimashkou</h1>
        <h3>
          And I'm a <TypedTitle />
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aperiam minus quasi et
          accusantium est quia atque!
        </p>
        <div className="social-media">
          <a href="#">
            <i className="bx bxl-vk"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <a href="#" className="btn">
          Download CV
        </a>
      </div>
      <div data-aos="fade-left" className="home-img photo"></div>
    </section>
  );
};

export default Home;
