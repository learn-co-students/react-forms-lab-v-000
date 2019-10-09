import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleTweet = event => {
    // let input = event.target.value
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTweet(event)} value={this.state.tweet}/>
        <p> Remaining Characters: {this.props.maxChars-this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
