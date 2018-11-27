import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"onChange={event => this.setState({tweet: event.target.value})} value={this.state.tweet}/> />
        {this.props.maxChars-this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
