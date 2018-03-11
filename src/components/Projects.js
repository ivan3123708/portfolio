import React from 'react';
import Project from './Project.js';
import projectsData from '../data/projectsData';
import '../styles/Projects.css';

const Projects = () => {

  return (
    <div className="projects">
      <h3>WEB APPS</h3>
      <div className="projects-group">
      {projectsData.web_apps.map((web_app) => {
        return (
          <Project
            key={web_app.title}
            group="web-app"
            title={web_app.title}
            description={web_app.description}
            tools={web_app.tools}
            demo={web_app.demo}
            code={web_app.code}
            img={web_app.img}
          />
        );
      })}
      </div>
      <h3>CSS ART</h3>
      <div className="projects-group">
        {projectsData.css_art.map((art) => {
          return (
            <Project
              key={art.title}
              group="css-art"
              title={art.title}
              demo={art.demo}
              code={art.code}
              img={art.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;