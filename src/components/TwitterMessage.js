import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 60,
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <p>{this.state.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
