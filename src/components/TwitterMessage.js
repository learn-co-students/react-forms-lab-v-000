import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      maxChars: props.maxChars
    };
  }

  handleMessageChange = event => {
    let remainingChars;

    if (event.target.value.length > this.state.message.length) {
      remainingChars = this.state.maxChars - 1
    } else {
      remainingChars = this.state.maxChars + 1
    }

    this.setState({
      message: event.target.value,
      maxChars: remainingChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleMessageChange(event)}/>
        <span>Remaining Characters: {this.state.maxChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
