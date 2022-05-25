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
    <hr className="line-space" />
    <div className="about-final-content">
      <div className="skills-container">
        <div className="language">
          <h4>Language</h4>
          <ul className="list">
            <li>Javascript</li>
            <li>Ruby</li>
            <li>Html</li>
            <li>Css</li>
          </ul>
        </div>
        <div className="framework">
          <h4>Frameworks</h4>
          <ul className="listt">
            <li>Bootstrap</li>
            <li>Ruby on Rails</li>
            <li>RSPec</li>
            <li>CapyBara</li>
            <li>Selenium</li>
          </ul>
        </div>
      </div>
      <div className="skills">
        <h4>Skills</h4>
        <div className="skill-list">
          <span className="chart__label">
            Codekit
          </span>
          <div className="chart__bar" style={{ width: '80%' }} />
          <span className="chart__label">
            Github
          </span>
          <div className="chart__bar" style={{ width: '95%' }} />
          <span className="chart__label">
            Gitlab
          </span>
          <div className="chart__bar" style={{ width: '70%' }} />
          <span className="chart__label">
            Terminal
          </span>
          <div className="chart__bar" style={{ width: '90%' }} />
        </div>
      </div>
    </div>
  </>
);
export default About;
