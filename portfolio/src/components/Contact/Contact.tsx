import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contacts">
      <h2 data-aos="flip-down" className="heading">
        Contact <span>Me</span>
      </h2>
      <form data-aos="flip-up" action="#">
        <div className="input-box">
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email address" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" />
          <input type="email" placeholder="Email subject" />
        </div>
        <textarea cols={30} rows={10} placeholder="Your Message" />
        <input type="submit" value="Send message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
