import React from "react";
import { photo2 } from "../../constants/images";
import { getMyAge } from "../../helpers/getMyAge";
import { MY_BIRTH_DAY } from "../../constants/consts";

const About = () => {
  const age = getMyAge(MY_BIRTH_DAY);

  return (
    <section className="about" id="about">
      <div
        data-aos="fade-right"
        className="about-img photo"
        style={{
          backgroundImage: `url("${photo2}")`,
        }}
      ></div>
      <div data-aos="fade-left" className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend developer!</h3>
        <p>
          My name is Aleksey. I am {age} years old. I am Belarus and live in
          Minsk.
        </p>
      </div>
    </section>
  );
};

export default About;
