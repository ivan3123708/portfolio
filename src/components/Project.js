import React from 'react';

import '../styles/Project.css';

const Project = () => (
  <div className="project">
    <img src={require('../img/project1.jpg')} alt="hehe" />
    <h4>Twitter Clone</h4>
    <span>html5</span><span>css3</span><span>javascript</span><span>react</span><span>redux</span>
    <div className="buttons">
      <button>DEMO</button>
      <button>CODE</button>
    </div>
  </div>
);

export default Project;