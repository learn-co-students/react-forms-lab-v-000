import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft: this.props.maxChars
    };
  }

  handleChange = ev => {
    const message = ev.target.value
    const charsLeft = this.props.maxChars - message.length

    this.setState({ message, charsLeft })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.message} type="text" name="message" id="message" />
        <p>{this.state.charsLeft} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
