import React from 'react';
import './HomePage.scss';
import map from '../images/map.svg';

const Contact = () => (
  <>
    <div id="Contact" className="contact-container">
      <div className="form-area">
        <div className="form-title">
          <h2>Lets Chat</h2>
          <p>
            I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat
            please get in touch.
          </p>
        </div>
        <form id="form" className="form">
          <ul className="contact-form">
            <li className="full-name-input">
              <input className="full-name" id="full-name" type="text" name="name" maxLength="30" placeholder="Full name" required />
            </li>
            <li className="email-input">
              <input className="email" id="email" type="email" name="Email address" placeholder="Email address" required />
            </li>
            <li className="text-area">
              <textarea
                className="message"
                id="message"
                name="Enter text here"
                maxLength="500"
                placeholder="Enter text here"
                required
              />
            </li>
            <li className="submit-button">
              <button className="about-button button" type="submit">Send Message</button>
              <span className="error hidde-span" />
            </li>
          </ul>
        </form>
      </div>
      <div
        className="form-decoration"
        style={{
          backgroundImage: `url(${map})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
    </div>
    <div className="footer">
      <hr />
      <p>Designed and developed with ❤ by Jorge Rios. &copy; 2022 All rights reserved</p>
    </div>
  </>
);
export default Contact;
