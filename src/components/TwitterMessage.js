import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleTweet = (event) => {
    this.setState({
      tweet: event.target.value
    });
  }

  characters = () => (
    this.props.maxChars - this.state.tweet.length
  )



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleTweet}/>
        <small>{this.characters()}</small>
      </div>
    );
  }
}

export default TwitterMessage;
