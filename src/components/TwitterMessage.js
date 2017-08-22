import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var input = event.target.value;
    this.setState({
      value: event.target.value,
      chars_left: this.props.maxChars - input.length
    });
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
        <p>Max: {this.props.maxChars}</p>
        <p>Remaining: {this.state.chars_left}</p>
      </div>
    );
  }
}

export default TwitterMessage;
