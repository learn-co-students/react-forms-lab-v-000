import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleTweetChange = (event) => {
    this.setState({
      message: event.target.value
    })
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleTweetChange(event)} id="message" name="message" value={this.state.message} />
        <p>You have {this.props.maxChars - this.state.message.length} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
