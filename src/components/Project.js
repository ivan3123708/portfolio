import React from 'react';

import '../styles/Project.css';

const Project = (props) => (
  <div className="project">
    <img src={require(`../img/${props.img}`)} />
    <h4>{props.title}</h4>
    <p>{props.description}</p>
    <div className="tools">
      {props.tools && props.tools.map((tool) => <span key={tool}>{tool}</span>)}
    </div>
    <div className="buttons">
      <a href={props.demo} target="blank">DEMO</a>
      <a href={props.code} target="blank">CODE</a>
    </div>
  </div>
);

export default Project;