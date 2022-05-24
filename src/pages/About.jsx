import React from 'react';
import './HomePage.scss';
import me from '../images/me-1.svg';

const About = () => (
  <>
    <div id="About" className="about-container">
      <div className="about-description">
        <div className="about-title">
          <h2>About me</h2>
        </div>
        <div className="about-paragraph">
          <p>
            I can help you build a product, feature or
            website. Look through some of my work
            and experience! If you like what you see
            and have a project you need coded,
            don&rsquo;t
            hestiate to contact me.
          </p>
        </div>
        <div>
          <button type="button" className="about-button">Get My Resume</button>
        </div>
      </div>
      <div className="about-image">
        <img src={me} alt="profile" width="90%" />
      </div>
    </div>
  </>
);
export default About;
