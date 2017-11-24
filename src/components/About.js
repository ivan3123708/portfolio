import React from 'react';

import '../styles/About.css';

const About = () => (
  <div className="about">
    <div className="about-me">
      <div className="photo">
        <img src={require('../img/avatar.jpg')} alt="me"/>
      </div>
      <div className="text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
      <img src={require('../img/webpack.png')} alt="webpack" />
      <img src={require('../img/git.png')} alt="git" />
    </div>
  </div>
);

export default About;