import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 140,
      tweet: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleChange} />
        <p>{this.state.maxChars - this.state.tweet.length} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
