import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  setTweet = event => {
    this.setState({
      tweet: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.setTweet} />
        <strong>Remaining Characters: {this.props.maxChars - this.state.tweet.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
