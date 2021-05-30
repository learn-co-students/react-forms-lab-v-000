import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      chkChars: props.maxChars
    };
  }

  updateMsg = event => {
    const data = event.target
    this.setState(previousState => {
      return {
        message: data.value,
        chkChars: previousState.chkChars - 1
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.updateMsg} value={this.state.message} />
        <p>Remaining characters: {this.state.chkChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
