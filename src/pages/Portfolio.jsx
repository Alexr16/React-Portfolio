import React, { useState } from 'react';
import './HomePage.scss';
import { useDispatch } from 'react-redux';
import Technologies from '../components/Badgets';
import { fetchProjectsData } from '../Redux/Projects/Projects';
import projectsData from '../Data/projectsData';
// import project from '../images/project1.svg';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const dispatch = useDispatch();
  const [info] = useState(dispatch(fetchProjectsData(projectsData)));
  const projectFilter = info.data.reduce((result, project) => {
    if (project.id > 1) {
      result.push(project);
    }
    return result;
  }, []);

  return (
    <>
      <div id="Portfolio" className="feature-container">
        <h2>My Recent Works</h2>
        <div className="project-content">
          <div className="project-img">
            <img src={info.data[0].image} alt="profile" width="100%" />
          </div>
          <div className="content-container">
            <p>Feature Project</p>
            <h3>{info.data[0].title}</h3>
            <div className="feature-paragraph">
              <p>{info.data[0].description}</p>
            </div>
            <ul className="tech-list">
              {info.data[0].technologies.map((tec) => (
                <Technologies
                  key={tec.id}
                  item={tec}
                />
              ))}
            </ul>
            <div className="see-project">
              <button className="button project-button" type="button">See Project</button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <ul className="project-cards-container">
          {projectFilter.map(
            (project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ),
          )}
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
