import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetText: '',
    };
  }

  handleChange = event => {
    this.setState({
      tweetText: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your Tweet</strong>
        <input
          type="text"
          value={this.state.tweetText}
          onChange={this.handleChange}
        />{this.props.maxChars - this.state.tweetText.length}
      </div>
    );
  }
}

export default TwitterMessage;
