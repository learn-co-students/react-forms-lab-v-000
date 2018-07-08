import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 140,
      charsRemaining: 140,
      value: '',
    };
  }

  handleChange = (event) => {
    let charValue = event.target.value.length
    this.setState({
      value: event.target.value,
      charsRemaining: this.state.maxChars - charValue,
    })
  }

  render() {
    return (
      <div>
        <strong>{this.state.charsRemaining}</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
      </div>
    );
  }
}

export default TwitterMessage;