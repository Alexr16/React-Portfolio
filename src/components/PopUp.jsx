import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiPagesFill } from 'react-icons/ri';
import Technologies from './Badgets';

const Popup = (prop) => {
  const { data, handleClose } = prop;

  return (
    <div className="popup-box">
      <div className="box">
        <div className="close-button">
          <button type="button" className="close close-btn" label="close btn" onClick={handleClose}><AiFillCloseCircle /></button>
        </div>
        <div className="popup-title">
          <h2 className="title-pop">{data.title}</h2>
        </div>
        <div className="tag-container">
          <ul className="pop-tech-list">
            {data.technologies.map((tec) => (
              <Technologies
                key={tec.id}
                item={tec}
              />
            ))}
          </ul>
        </div>
        <div className="popup-work">
          <img src={data.image} alt="profile" width="100%" className="popup-images" />
          <div className="cont">
            <div className="popup-paragraph">
              <p className="pop-paragraph">{data.description}</p>
            </div>
            <div className="popup-buttons">
              <button type="button" className="link" label="Live link">
                <a href={data.liveButton} aria-label="Live link" className="link-btn" target="_blank" rel="noreferrer noopener">
                  See live
                  <RiPagesFill />
                </a>
              </button>
              <button type="button" className="link" label="Source link">
                <a href={data.sourceButton} aria-label="Source link" className="link-btn" target="_blank" rel="noreferrer noopener">
                  See Source
                  <FiGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
