import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <p>{this.props.maxChars - this.state.value.length} character remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
