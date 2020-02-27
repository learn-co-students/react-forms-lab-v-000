import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
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
        <input type="text" name="message" id="message" onChange={event => this.handleMessage(event)} value={this.state.message} />
        <p>
          <span>Remaining characters:</span>
          <span>{this.props.maxChars - this.state.message.length}</span>
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
