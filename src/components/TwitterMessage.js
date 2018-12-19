import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tweet: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value 
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="tweet" maxLength={this.props.maxChars} onChange={this.handleChange} value={this.state.tweet} />
        <p>Chars left: {this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
