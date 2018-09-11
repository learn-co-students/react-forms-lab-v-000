import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  makeTweet = e => {
    this.setState({
      tweet: e.target.value
    });
  };

  remainingChars = () => {
    return this.props.maxChars - this.state.tweet.length;
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.tweet}
          onChange={e => this.makeTweet(e)}
        />
        <br />
        Remaining Chars: {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
