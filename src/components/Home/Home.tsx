import React from "react";
import TypedTitle from "../TypedTitle/TypedTitle";
import {photo1} from "../../constants/images";
import SocialList from "./SocialList";
import {SocialLink} from "../../types/SocialLinks";
const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: "bx bxl-vk",
    link: "https://vk.com/id652200968",
  },
  {
    id: 2,
    icon: "bx bxl-instagram-alt",
    link: "https://www.instagram.com/timoxaarmy/?igshid=OTk0YzhjMDVlZA==",
  },
  {
    id: 3,
    icon: "bx bxl-github",
    link: "https://github.com/AlexeiTim",
  },
  {
    id: 4,
    icon: "bx bxl-linkedin",
    link: "https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%82%D0%B8%D0%BC%D0%B0%D1%88%D0%BA%D0%BE%D0%B2-489161256/",
  },
];
const Home = () => {
  return (
    <section
      className='home'
      id='home'
    >
      <div
        data-aos='fade-right'
        className='home-content'
      >
        <h3>Hello, It's me</h3>
        <h1>Alexei Tsimashkou</h1>
        <h3>
          And I'm a <TypedTitle />
        </h3>
        <p>No commercial development experience. Learning JS, TypeScript, React, Vue!</p>
        <div className='social-media'>
          <SocialList links={socialLinks} />
        </div>
        {/* <a href="#" className="btn">
          Download CV
        </a> */}
      </div>
      <div
        data-aos='fade-left'
        className='home-img photo'
        style={{
          backgroundImage: `url("${photo1}")`,
        }}
      ></div>
    </section>
  );
};

export default Home;
