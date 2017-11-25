import React from 'react';

import '../styles/Project.css';

const Project = (props) => (
  <div className="project">
    <img src={require(`../img/${props.img}`)} alt="hehe" />
    <h4>{props.title}</h4>
    {props.tools.map((tool) => <span>{tool}</span>)}
    <div className="buttons">
      <a href={props.demo} target="blank">DEMO</a>
      <a href={props.code} target="blank">CODE</a>
    </div>
  </div>
);

export default Project;