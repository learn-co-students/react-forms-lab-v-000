import React from "react";

export default class TwitterMessage extends React.Component {
  state = {
    message: "",
    remainingChars: this.props.maxChars
  };

  handleInput = event => {
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - (this.state.message.length + 1)
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          id="message"
          onChange={this.handleInput}
          value={this.state.message}
        />
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}
