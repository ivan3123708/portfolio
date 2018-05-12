import React from 'react';
import '../styles/Contact.css';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      message: ''
    }

    this.onSendMessage = this.onSendMessage.bind(this);
  }

  onSendMessage = (e) => {
    this.setState({ message: 'Your message has been sent!' });
  }

  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <div className="message">{this.state.message}</div>
          <form action="/send_mail" method="POST" onSubmit={this.onSendMessage}>
            <p>Name</p>
            <input type="text" name="name" placeholder="Enter your name" />
            <p>E-mail</p>
            <input type="email" name="email" placeholder="Enter your e-mail" />
            <p>Message</p>
            <textarea rows="7" name="message" placeholder="Enter your message"></textarea>
            <br />
            <button type="submit">SEND</button>
          </form>
        </div>
        <div className="contact-links">
          <p>You can send me a message or contact me via e-mail at: <mark>ivan3123708@gmail.com</mark>.</p>
          <p>You can also visit my LinkedIn page, download <a href="https://drive.google.com/file/d/1bn89oHF2wCek1kBZBlK6Dyp_lCuNh7A3/view?usp=sharing" target="blank">CV</a> or check out my profiles on CodePen and GitHub, where you can see more of my work, on the links bellow.</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/ivan-jakimovski-b07b6b153/" target="blank"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a></li>
            <li><a href="https://github.com/ivan3123708" target="blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
            <li><a href="https://codepen.io/ivan3123708/" target="blank"><i className="fa fa-codepen fa-3x" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact;