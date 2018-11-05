import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 140,
      message: ''
    };
  }

  handleMessageChange =(event)=>{
    this.setState({
      message :event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id="message" value={this.state.message} onChange={event => this.handleMessageChange(event)} />
        Character Counter: {this.state.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;