import React from 'react';

import Project from './Project.js';

import '../styles/Projects.css';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      web_apps: [
        {
          title: 'World Factbook',
          description: 'Search countries, filter and sort the data. Made this project from scratch to practice react, redux, configuring webpack, fetching data from external API...',
          tools: ['scss', 'react', 'redux', 'webpack', 'ajax'],
          demo: 'https://ij-world-factbook.herokuapp.com/',
          code: 'https://github.com/ivan3123708/world-factbook',
          img: 'web_apps/world_factbook.jpg'
        },
        {
          title: 'Recipe Box',
          description: 'Building this app taught me how to configure webpack, setup simple express server, deploy on Heroku and many other things about React in general.',
          tools: ['scss', 'react', 'webpack'],
          demo: 'https://ij-recipe-box.herokuapp.com/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-React-D3-Projects/tree/master/Recipe%20Box',
          img: 'web_apps/recipe_box.jpg'
        },
        {
          title: 'Javascript Calculator',
          description: 'One of my first projects. Building it was great practice for CSS and jQuery, but also helped me understand Javascript data types better.',
          tools: ['html', 'css', 'javascript', 'jquery'],
          demo: 'http://ancient-language.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Javascript%20Calculator',
          img: 'web_apps/calculator.jpg'
        },
        {
          title: 'Pomodoro Clock',
          description: 'Work timer app for tracking work and pause time which you can set, built using setInterval functions and jQuery.',
          tools: ['html', 'css', 'bootstrap', 'jquery'],
          demo: 'http://jobless-key.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Pomodoro%20Clock',
          img: 'web_apps/pomodoro.jpg'
        },
        {
          title: 'Random Quote Machine',
          description: 'Used AJAX request to fetch data from external API. User can get new quote and share it using twitter button.',
          tools: ['html', 'css', 'jquery', 'ajax'],
          demo: 'http://nosy-cause.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Random%20Quote%20Machine',
          img: 'web_apps/quotes.jpg'
        },
        {
          title: 'Tic Tac Toe',
          description: 'Classic tic-tac-toe game where user can choose whether to play with X or O and restart the game after round ends. Used bootstrap grid to align the fields.',
          tools: ['html', 'css', 'bootstrap', 'jquery'],
          demo: 'http://materialistic-shape.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Tic%20Tac%20Toe',
          img: 'web_apps/tic_tac_toe.jpg'
        },
        {
          title: 'Simon Game',
          description: 'Game for training your memory by repeating the series of tone and light signals. Making it was a good practice for data structures manipulation.',
          tools: ['html', 'css', 'javascript', 'jquery'],
          demo: 'http://cowardly-knowledge.surge.sh/',
          code: 'https://github.com/ivan3123708/freeCodeCamp-Front-end-Projects/tree/master/Simon%20Game',
          img: 'web_apps/simon.jpg'
        }
      ],

      css_art: [
        {
          title: 'Windmill',
          demo: 'https://codepen.io/ivan3123708/full/NwomLX/',
          code: 'https://codepen.io/ivan3123708/pen/NwomLX',
          img: 'css_art/windmill.gif'
        },
        {
          title: 'Homer',
          demo: 'https://codepen.io/ivan3123708/full/YEOYdO/',
          code: 'https://codepen.io/ivan3123708/pen/YEOYdO',
          img: 'css_art/homer.gif'
        },
        {
          title: 'Sunset',
          demo: 'https://codepen.io/ivan3123708/full/OOGBOx/',
          code: 'https://codepen.io/ivan3123708/pen/OOGBOx',
          img: 'css_art/sunset.png'
        },
        {
          title: 'Rings',
          demo: 'https://codepen.io/ivan3123708/full/QOByqj/',
          code: 'https://codepen.io/ivan3123708/pen/QOByqj/',
          img: 'css_art/rings.gif'
        },
        {
          title: 'Stimpy',
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
          {this.state.css_art.map((art) => {
            return (
              <Project
                key={art.title}
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
}

export default Projects;