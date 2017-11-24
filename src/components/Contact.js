import React from 'react';

import '../styles/Contact.css';

const Contact = () => (
  <div className="contact">
    <div className="contact-form">
      <form>
        <p>Name</p>
        <input type="text" placeholder="Enter your name" />
        <p>E-mail</p>
        <input type="email" placeholder="Enter your e-mail" />
        <p>Message</p>
        <textarea rows="7" placeholder="Enter your message"></textarea>
        <br/>
        <button>SEND</button>
      </form>
    </div>
    <div className="contact-links">
      <p>You can send me a message or contact me via e-mail at: <mark>ivan3123708@gmail.com</mark>.</p>
      <p>You can also visit my LinkedIn page, or check out my profiles on CodePen and GitHub, where you can see more of my work, on the links bellow.</p>
      <ul>
        <li><a href="https://linkedin.com" target="blank"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a></li>
        <li><a href="https://github.com/ivan3123708" target="blank"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
        <li><a href="https://codepen.io/ivan3123708/" target="blank"><i class="fa fa-codepen fa-3x" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </div>
);

export default Contact;