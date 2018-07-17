import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      charsUsed: 0
    };
  }

  handleTextInput = (event) => {
    const maxChars = this.props.maxChars
    const input = event.target.value
    this.setState({
      value: event.target.value,
      charsUsed: input.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text" value={this.state.value}
          onChange={this.handleTextInput} />
        <p>{this.props.maxChars - this.state.charsUsed} remaining characters</p>
      </div>
    );
  }
}

export default TwitterMessage;
