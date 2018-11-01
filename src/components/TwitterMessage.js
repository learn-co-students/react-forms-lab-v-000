import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage = (event) => {
    this.setState({
      message: event.target.value
    })
    // this.remainingChar();
  }

  remainingChar = () => {
    var l = this.props.maxChars - this.state.message.length;
    return <div>Remaining character: {l}</div>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message}
          onChange={this.updateMessage} />
        {this.remainingChar()}
      </div>
    );
  }
}

export default TwitterMessage;
