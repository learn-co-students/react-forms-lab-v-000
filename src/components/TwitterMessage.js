import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      twitterMessageField: '',
      textRemaining: 0
    };
  }

  updateField = (changeEvent) => {
    this.setState({
      twitterMessageField: changeEvent.target.value,
      textRemaining: this.props.maxChars - changeEvent.target.value.length
    });

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.updateField} value={this.state.twitterMessageField} />
        <p>Text Remaining: {this.state.textRemaining} of {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
