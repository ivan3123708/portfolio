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
        <textarea rows="10" placeholder="Enter your message"></textarea>
        <br/>
        <button>Send</button>
      </form>
    </div>
    <div className="contact-links">
      <ul>
        <li><i class="fa fa-envelope fa-3x" aria-hidden="true"></i>ivan3123708@gmail.com</li>
        <li><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i> LinkedIn</li>
        <li><a href="https://github.com/ivan3123708" target="blank"><i class="fa fa-github fa-3x" aria-hidden="true"></i> GitHub</a></li>
        <li><a href="https://codepen.io/ivan3123708/" target="blank"><i class="fa fa-codepen fa-3x" aria-hidden="true"></i>CodePen</a></li>
      </ul>
    </div>
  </div>
);

export default Contact;