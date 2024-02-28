import React from "react";
import {photo2} from "../../constants/images";

const About = () => {
  return (
    <section
      className='about'
      id='about'
    >
      <div
        data-aos='fade-right'
        className='about-img photo'
        style={{
          backgroundImage: `url("${photo2}")`,
        }}
      ></div>
      <div
        data-aos='fade-left'
        className='about-content'
      >
        <h2 className='heading'>
          About <span>Me</span>
        </h2>
        <h3>Frontend developer!</h3>
        <p>My name is Aleksey. I am 26 years old. I am Belarus and live in Minsk.</p>
        {/* <a href="#" className="btn">
          Read more
        </a> */}
      </div>
    </section>
  );
};

export default About;
