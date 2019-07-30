import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message : ''
    };
  }

  handleChange = (event) => {
    this.setState({
      message : event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message|Characters left({this.props.maxChars - this.state.message.length})|:</strong>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          type="text" 
          name="message" 
          id="message" />
      </div>
    );
  } 
}

export default TwitterMessage;
