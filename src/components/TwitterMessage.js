import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: '',
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          value={this.state.tweet}
          type="text"
          onChange={this.handleChange}
        />
        <h3>{this.props.maxChars - this.state.tweet.length}</h3>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140,
};

export default TwitterMessage;
