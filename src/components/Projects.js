import React from 'react';

import Project from './Project.js';

import '../styles/Projects.css';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      web_apps: [
        {
          title: 'Javascript Calculator',
          tools: ['html', 'css', 'javascript', 'jquery'],
          demo: 'http://ancient-language.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Javascript%20Calculator',
          img: 'web_apps/calculator.jpg'
        },
        {
          title: 'Pomodoro Clock',
          tools: ['html', 'css', 'bootstrap', 'jquery'],
          demo: 'http://jobless-key.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Pomodoro%20Clock',
          img: 'web_apps/pomodoro.jpg'
        },
        {
          title: 'Random Quote Machine',
          tools: ['html', 'css', 'jquery', 'ajax'],
          demo: 'http://nosy-cause.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Random%20Quote%20Machine',
          img: 'web_apps/quotes.jpg'
        },
        {
          title: 'Tic Tac Toe',
          tools: ['html', 'css', 'bootstrap', 'jquery'],
          demo: 'http://materialistic-shape.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Tic%20Tac%20Toe',
          img: 'web_apps/tic_tac_toe.jpg'
        },
        {
          title: 'Simon Game',
          tools: ['html', 'css', 'javascript', 'jquery'],
          demo: 'http://cowardly-knowledge.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Simon%20Game',
          img: 'web_apps/simon.jpg'
        }
      ],

      css_art: [
        {
          title: 'Windmill',
          tools: ['html', 'scss'],
          demo: 'https://codepen.io/ivan3123708/full/NwomLX/',
          code: 'https://codepen.io/ivan3123708/pen/NwomLX',
          img: 'css_art/windmill.gif'
        },
        {
          title: 'Homer',
          tools: ['html', 'scss'],
          demo: 'https://codepen.io/ivan3123708/full/YEOYdO/',
          code: 'https://codepen.io/ivan3123708/pen/YEOYdO',
          img: 'css_art/homer.gif'
        },
        {
          title: 'Sunset',
          tools: ['html', 'scss'],
          demo: 'https://codepen.io/ivan3123708/full/OOGBOx/',
          code: 'https://codepen.io/ivan3123708/pen/OOGBOx',
          img: 'css_art/sunset.png'
        },
        {
          title: 'Stimpy',
          tools: ['html', 'scss'],
          demo: 'https://codepen.io/ivan3123708/full/XzojEr/',
          code: 'https://codepen.io/ivan3123708/pen/XzojEr/',
          img: 'css_art/stimpy.png'
        }
      ]
    }
  }

  render() {
    return (
      <div className="projects">
        <h3>WEB APPS</h3>
        <div className="projects-group">
        {this.state.web_apps.map((web_app) => {
          return (
            <Project
              key={web_app.title}
              title={web_app.title}
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
          {this.state.css_art.map((art) => {
            return (
              <Project
                key={art.title}
                title={art.title}
                tools={art.tools}
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
}

export default Projects;