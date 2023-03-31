import React from 'react';
import Aos from 'aos';

const Portfolio = () => {
  return (
    <section  className="portfolio" id="portfolio">
      <h2 data-aos="fade-down" className="heading">
        Last <span>Projects</span>
      </h2>
      <div data-aos="fade-up" className="portfolio-container">
        <div className="portfolio-box">
          <img src="./portfolio1.jpg" alt="photo1" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque libero aliquam
              debitis, fugiat incidunt nihil aspernatur non.
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div data-aos="fade-zoom-in" className="portfolio-box">
          <img src="./portfolio1.jpg" alt="photo1" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque libero aliquam
              debitis, fugiat incidunt nihil aspernatur non.
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="./portfolio1.jpg" alt="photo1" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque libero aliquam
              debitis, fugiat incidunt nihil aspernatur non.
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="./portfolio1.jpg" alt="photo1" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque libero aliquam
              debitis, fugiat incidunt nihil aspernatur non.
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="./portfolio1.jpg" alt="photo1" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque libero aliquam
              debitis, fugiat incidunt nihil aspernatur non.
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="./portfolio1.jpg" alt="photo1" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque libero aliquam
              debitis, fugiat incidunt nihil aspernatur non.
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
