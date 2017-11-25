import React from 'react';

import Project from './Project.js';

import '../styles/Projects.css';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Javascript Calculator',
          tools: ['html', 'css', 'javascript', 'jquery'],
          demo: 'http://ancient-language.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Javascript%20Calculator',
          img: 'project1.jpg'
        },
        {
          title: 'Pomodoro Clock',
          tools: ['html', 'css', 'javascript', 'jquery'],
          demo: 'http://jobless-key.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Pomodoro%20Clock',
          img: 'project1.jpg'
        },
        {
          title: 'Random Quote Machine',
          tools: ['html', 'css', 'jquery', 'ajax'],
          demo: 'http://nosy-cause.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Random%20Quote%20Machine',
          img: 'project1.jpg'
        },
        {
          title: 'Tic Tac Toe',
          tools: ['html', 'css', 'javascript', 'jquery'],
          demo: 'http://materialistic-shape.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Tic%20Tac%20Toe',
          img: 'project1.jpg'
        },
        {
          title: 'Simon Game',
          tools: ['html', 'css', 'javascript', 'jquery'],
          demo: 'http://cowardly-knowledge.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Simon%20Game',
          img: 'project1.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <div className="projects">
        <h3>WEB APPS</h3>
        <div className="projects-group">
        {this.state.projects.map((project) => {
          return (
            <Project
              title={project.title}
              tools={project.tools}
              demo={project.demo}
              code={project.code}
              img={project.img}
            />
          );
        })}
        </div>
      </div>
    );
  }
}

export default Projects;