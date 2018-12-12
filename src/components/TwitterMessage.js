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
        <input type="text"
        name="tweet"
        value={this.state.tweet}
        onChange={event => this.setState({tweet: event.target.value}, console.log(this.state))}/>
        
        <p>Characters left: <strong>{this.props.maxChars-this.state.tweet.length}</strong></p>
      </div>
    );
  }
}

export default TwitterMessage;
