import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

const Home = () => (
  <div>
    <div className="camo"></div>
    <div className="home">
      <div className="title">
        <h1>IVAN JAKIMOVSKI</h1>
        <p>Web Developer</p>
        <div className="home-links">
          <Link to="/contact" className="home-link contact-link">CONTACT ME</Link>
          <Link to="/projects" className="home-link work-link">SEE MY WORK</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;