import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
      remaining: 140,
    };
  }

  handleTweet = (e) => this.setState({
    tweet: e.target.value,
    remaining: 140 - parseInt(e.target.value.length,10), 
  });

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={this.handleTweet} 
          type="text" 
          value={this.state.tweet}
        />
        <span>{this.state.remaining}</span>
      </div>
    );
  }
}

export default TwitterMessage;
