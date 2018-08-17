import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweet: ''
    };
  }

  handleChange = (e) => {
      this.setState({
        tweet: e.target.value
      })
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.tweet} />
        <small>{ this.props.maxChars - this.state.tweet.length }</small>
      </div>
    );
  }
}

export default TwitterMessage;
