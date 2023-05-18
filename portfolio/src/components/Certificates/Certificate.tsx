import React from "react";
import CertificateList from "./CertificateList";

const Certificates = () => {
  return (
    <section
      className='services'
      id='services'
    >
      <h2
        data-aos='fade-down'
        className='heading'
      >
        My <span>Certificates</span>
      </h2>
      <div
        data-aos='fade-up'
        className='services-container'
      >
        <CertificateList />
      </div>
    </section>
  );
};

export default Certificates;
