import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      remainingChars: 140
    };
  }

  handleChange = event => {
    const totalChars = event.target.value.length;
    const newRemainingChars = this.props.maxChars - totalChars;
    this.setState({
      value: event.target.value,
      remainingChars: newRemainingChars,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />Characters Remaining: {this.state.remainingChars}/{this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
