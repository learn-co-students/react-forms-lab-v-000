import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <p>
          Charcter Count:
          {this.state.message.length}
        </p>
        <p>
          Charcter Max:
          {this.props.maxChars}
        </p>
        <p>
          Charcters Remaining:
          {this.props.maxChars - this.state.message.length}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
