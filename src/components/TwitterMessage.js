import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageLength: 0,
      messageValue : ''
    };
  }

  updateLength = function (event) {
    this.setState({
      messageValue: event.target.value,
      messageLength: event.target.value.length,
    })
  }.bind(this);

  render() {
    const remainingChar = this.props.maxChars - this.state.messageLength;

    return (
      <div>
        <strong>Your message is currently: {this.state.messageLength}, you have {remainingChar} remaining. </strong>
        <input type="text" onChange={this.updateLength} value={this.state.messageValue}/>
      </div>
    );
  }
}

export default TwitterMessage;
