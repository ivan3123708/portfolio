import React from 'react';

import Project from './Project.js';

import '../styles/Projects.css';

const Projects = () => (
  <div className="projects">
    <h1>Web Apps</h1>
    <div className="projects-group">
      <Project />
      <Project />
      <Project />
    </div>
  </div>
);

export default Projects;