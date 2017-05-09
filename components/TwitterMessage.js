import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState(
      {message: event.target.value},
      function() {
        console.log(this.state.message.length)
      }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        <small>{this.props.maxChars - this.state.message.length}</small>
      </div>
    );
  }
}
