import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageText: '',
    };
  }

  handleChange = event => {
    this.setState({
      messageText: event.target.value,
    });
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="messageText" value={this.state.messageText} onChange={this.handleChange} />
        <span name="remainingChar">{this.props.maxChars - this.state.messageText.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
