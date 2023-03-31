import React from 'react';

const Services = () => {
  return (
    <section  className="services" id="services">
      <h2 data-aos="fade-down" className="heading">
        Our <span>Services</span>
      </h2>
      <div data-aos="fade-up" className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi molestiae maiores
            deleniti quia fugiat sapiente. Asperiores, facere?
          </p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>

        <div className="services-box">
          <i className="bx bxs-paint"></i>
          <h3>Graphic</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi molestiae maiores
            deleniti quia fugiat sapiente. Asperiores, facere?
          </p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>

        <div className="services-box">
          <i className="bx bx-bar-chart-alt"></i>
          <h3>Digital marketing</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi molestiae maiores
            deleniti quia fugiat sapiente. Asperiores, facere?
          </p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
