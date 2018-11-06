import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      charsCount: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      charsCount: event.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div>{this.props.maxChars - this.state.charsCount}</div>
        <div>{this.props.maxChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
