import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleTweet = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }

  // prop available maxChars

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="tweet" value={this.state.tweet} onChange={event =>this.handleTweet(event)} />
        <p>You have {this.props.maxChars - this.state.tweet.length} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
