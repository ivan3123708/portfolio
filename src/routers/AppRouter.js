import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header.js';
import Home from '../components/Home.js';
import Projects from '../components/Projects.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
