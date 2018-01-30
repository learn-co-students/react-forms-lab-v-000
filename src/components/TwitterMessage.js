import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      twitterMessage: '',
      charsLeft: props.maxChars
    };
  }

  handleTwitterChange = event => {
    this.setState({ twitterMessage: event.target.value }, () => {
      const charsRemaining = this.props.maxChars - this.state.twitterMessage.length;
      this.setState({ charsLeft: charsRemaining });
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.twitterMessage} onChange={this.handleTwitterChange}/>
        <p>{this.state.charsLeft} characters remaining!</p>
      </div>
    );
  }
}

export default TwitterMessage;
