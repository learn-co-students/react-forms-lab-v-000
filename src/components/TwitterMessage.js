import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleTweetChange(event) {
    this.setState({tweet: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <textarea  value={this.state.tweet} onChange={event => this.handleTweetChange(event)}  />
        <p>{this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
