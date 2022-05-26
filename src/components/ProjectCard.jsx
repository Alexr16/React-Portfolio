import React, { useState } from 'react';
import Technologies from './Badgets';
import PopUP from './PopUp';

const ProjectCard = (prop) => {
  const { project } = prop;
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(!isHovering);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const hover = {
    backgroundImage: isHovering ? `url(${project.image})` : '',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundColor: isHovering ? 'rgb(33, 37, 41)' : '',
    color: isHovering ? 'black' : '',
  };

  return (
    <>
      <li className="project-container">
        <div
          className="project-cont"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={hover}
        >
          <h3>{project.title}</h3>
          <div className="project-paragraph">
            <p>{project.description}</p>
          </div>
          <ul className="tech-list">
            {project.technologies.map((tec) => (
              <Technologies
                key={tec.id}
                item={tec}
              />
            ))}
          </ul>
          <div className="see-btn">
            <button className="card-project-button" type="button" onClick={togglePopup}>See Project</button>
          </div>
        </div>
      </li>
      <>
        {isOpen && (
        <PopUP
          data={project}
          handleClose={togglePopup}
        />
        )}
      </>

    </>
  );
};

export default ProjectCard;
