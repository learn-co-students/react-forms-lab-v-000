import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { maxChars: 140 };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      maxChars: 140 - event.target.value.length
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
        <p>
          {this.state.maxChars} characters are still available for you message
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
