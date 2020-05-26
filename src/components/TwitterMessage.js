import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
  handleInput = event => {
    this.setState({
      message: event.target.value
    })
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInput} value={this.state.message} type="text" name="message" id="message" />
        <p>Remaining Characters: {this.props.maxChars-this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
