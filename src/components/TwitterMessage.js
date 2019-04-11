import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message"
          value={ this.state.message } 
          onChange={ (e) => this.handleChange(e) } />
        <p>Remaining characters: { this.state.maxChars - this.state.message.length }</p>
      </div>
    );
  }
}

export default TwitterMessage;
