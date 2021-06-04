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
      tweet: event.target.value,
    })
  }

  remainingChars() {

  }

  render() {
    let remaining = this.props.maxChars - this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.tweet} />
        <p>Remaining characters: {remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
