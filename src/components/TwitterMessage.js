import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.updateMessage(event)} />
        <p><strong>Characters Remaining:</strong> {this.props.maxChars - this.state.message.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;
