import React from 'react';
import './HomePage.scss';
import profile from '../images/profile.PNG';

const HomePage = () => (
  <>
    <div id="HomePage" className="header-container">
      <div className="headline-description">
        <div className="title-1">
          <h1>Hey There. I&rsquo;m</h1>
        </div>
        <div className="title-2">
          <h2>Jorge</h2>
        </div>
        <div className="title-3">
          <h3>Software Developer</h3>
        </div>
        <div className="header-paragraph">
          <p>
            I can help you build a product, feature or
            website. Look through some of my work
            and experience! If you like what you see
            and have a project you need coded,
            don&rsquo;t
            hesitate to contact me.

          </p>
        </div>
      </div>
      <div className="header-img-container">
        <img src={profile} alt="profile" width="80%" />
      </div>
    </div>
  </>
);
export default HomePage;
