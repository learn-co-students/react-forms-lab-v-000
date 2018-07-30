import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: 'Type your tweet here...'
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          id="twitter-message"
          value={this.state.tweet}
          onChange={event => this.handleChange(event)}
        />
        <br />
        <small>Maximum Characters: {this.props.maxChars}</small>
        <br />
        <small>Characters remaining: {this.props.maxChars - this.state.tweet.length}</small>
      </div>
    );
  }
}

export default TwitterMessage;
