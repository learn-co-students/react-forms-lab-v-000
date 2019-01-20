import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetContent: ""
    }
  }

  handleChange = event => {
    this.setState({
      tweetContent: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="tweetContent"
          value={this.state.tweetContent}
          onChange={this.handleChange}
        />
      <p>Remaining characters: {140-this.state.tweetContent.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
