import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageText: ""
    };
  }

  handleChange = (event) => this.setState({ messageText: event.target.value })


  render() {
    return (
      <div>
        <strong>Your message: (remaining characters: {this.props.maxChars - this.state.messageText.length })</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.messageText}/>
      </div>
    );
  }
}

export default TwitterMessage;
