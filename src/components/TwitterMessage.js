import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
    }

    validateLength = (event)=> {
      if (event.target.value.length <= this.props.maxChars) {
        this.setState({message: event.target.value})
      } else {
        alert("Over char limit")
      }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
            onChange={this.validateLength}
            value={this.state.message}
          />
        <em>Characters left: {this.props.maxChars - this.state.message.length}</em>
      </div>
    );
  }
}

export default TwitterMessage;
