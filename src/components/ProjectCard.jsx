import React, { useState } from 'react';
import Technologies from './Badgets';

const ProjectCard = (prop) => {
  const { project } = prop;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const hover = {
    backgroundImage: isHovering ? `url(${project.image})` : '',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundColor: isHovering ? '#A5BE3280' : '',
    color: isHovering ? 'black' : '',
  };

  return (
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
          <button className="card-project-button" type="button">See Project</button>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
