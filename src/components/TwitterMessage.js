import React from "react";

class TwitterMessage extends React.Component {
  constructor(maxChars) {
    super();

    this.state = {
      value: '',
      count: 0
    };
  }

handleChange = event => {
  this.setState({
    count: event.target.value.length,
    value: event.target.value
  });
}

var

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <span>{this.props.maxChars - this.state.count}</span>
      </div>
    );
  }
}

export default TwitterMessage;
