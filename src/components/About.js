import React from 'react';
import '../styles/About.css';

const About = () => (
  <div className="about">
    <div className="about-me">
      <div className="photo">
        <img src={require('../img/az.jpg')} alt="me"/>
      </div>
      <div className="text">
        <p>Hi, my name is Ivan and I'm front-end developer from Serbia. I started coding in high school and since then it became my hobby. Before turning it into profession I used to play around with making and designing websites.</p>
        <p>Now I'm developing fullstack applications, mostly using React, Node and MongoDB (MERN stack). I tend to write clean and reusable, strongly typed code, easy to read and test. Always keep up with the newest technologies and best practices. Constantly learning new things, contributing to open source projects, and also love solving coding problems on <a href="https://www.codewars.com/users/ivan3123708" target="blank">Codewars</a>.</p>
      </div>
    </div>
    <div className="skills">
      <h3>SKILLS</h3>
      <img src={require('../img/html5.png')} alt="html5" />
      <img src={require('../img/css3.png')} alt="css3" />
      <img src={require('../img/javascript.png')} alt="javascript" />
      <img src={require('../img/typescript.png')} alt="typescript" />
      <img src={require('../img/jquery.png')} alt="jquery" />
      <img src={require('../img/scss.png')} alt="scss" />
      <img src={require('../img/react.png')} alt="react" />
      <img src={require('../img/redux.png')} alt="redux" />
      <img src={require('../img/node.png')} alt="node" />
      <img src={require('../img/express.png')} alt="express" />
      <img src={require('../img/mongodb.png')} alt="mongodb" />
      <img src={require('../img/material-ui.png')} alt="material-ui" />
      <img src={require('../img/webpack.png')} alt="webpack" />
      <img src={require('../img/jest.png')} alt="jest" />
      <img src={require('../img/git.png')} alt="git" />
      <img src={require('../img/linux.png')} alt="linux" />
    </div>
  </div>
);

export default About;