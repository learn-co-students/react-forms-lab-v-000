import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: '',
    };
  }

  counter = event => {
    var tweet = event.target.value
    this.setState({
      tweet: tweet
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        value={this.state.tweet}
        onChange={this.counter}
        type="text" />
        <strong>{this.props.maxChars- this.state.tweet.length} characters left</strong>
      </div>
    );
  }
}

export default TwitterMessage;
