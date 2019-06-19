import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: '',
      charRemaining: this.props.maxChars
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value,
      charRemaining: this.state.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message (max characters: {this.state.maxChars}):</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
        <p>Characters remaining: {this.state.charRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
