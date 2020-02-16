import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleMessage(event)} name="message" id="message" value={this.state.message} />
        characters remaining: {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
