import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetBody: ''
    };
  }

  handleChange = (event) => {
    if (this.state.tweetBody.length < this.props.maxChars) {
      this.setState({
        tweetBody: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Characters Remaining: {this.props.maxChars - this.state.tweetBody.length}</strong><br />
        <input type="text" value={this.state.tweetBody} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
