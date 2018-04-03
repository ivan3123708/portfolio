import React from 'react';
import '../styles/About.css';

const About = () => (
  <div className="about">
    <div className="about-me">
      <div className="photo">
        <img src={require('../img/az.jpg')} alt="me"/>
      </div>
      <div className="text">
        <p>Hi, my name is Ivan and I'm front-end developer from Serbia. I started coding in highschool and since then it became my hobby. Before turning it into profession I used to play around with making and designing websites. Over the last couple of years I'm more oriented towards developing web applications using JavaScript and its libraries, especially React.</p>
        <p>Together with constantly expanding my knowledge of React ecosystem and other front-end technologies, I enjoy learning new skills such as Node and Express in order to get into backend and be able to build more powerful applications. I also love solving coding problems on <a href="https://www.codewars.com/users/ivan3123708" target="blank">Codewars</a>.</p>
      </div>
    </div>
    <div className="skills">
      <h3>SKILLS</h3>
      <img src={require('../img/html5.png')} alt="html5" />
      <img src={require('../img/css3.png')} alt="css3" />
      <img src={require('../img/javascript.png')} alt="javascript" />
      <img src={require('../img/jquery.png')} alt="jquery" />
      <img src={require('../img/scss.png')} alt="scss" />
      <img src={require('../img/react.png')} alt="react" />
      <img src={require('../img/redux.png')} alt="redux" />
      <img src={require('../img/node.png')} alt="node" />
      <img src={require('../img/express.png')} alt="express" />
      <img src={require('../img/mongodb.png')} alt="mongodb" />
      <img src={require('../img/material-ui.png')} alt="material-ui" />
      <img src={require('../img/webpack.png')} alt="webpack" />
      <img src={require('../img/git.png')} alt="git" />
      <img src={require('../img/linux.png')} alt="linux" />
    </div>
  </div>
);

export default About;