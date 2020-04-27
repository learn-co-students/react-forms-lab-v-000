import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // twitterMessage: "",
      charactersTyped: 0
    };
  }

  updateMessage = event => {

    this.setState({
      twitterMessage: event.target.value,
      charactersTyped: this.state.charactersTyped + 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.twitterMessage} onChange={event => {this.updateMessage(event)}}/>
        <span>{this.props.maxChars - this.state.charactersTyped}</span>
      </div>
    );
  }
}

export default TwitterMessage;
