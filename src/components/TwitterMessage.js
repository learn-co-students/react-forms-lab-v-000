import React from "react";

class TwitterMessage extends React.Component {

    state = { message: ""};
  
    handleChange = event => {
      this.setState({
        message: event.target.value,
      });
    }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        <span name="remainingChar">{this.props.maxChars - this.state.message.length} </span>
      </div>
    );
  }
}

export default TwitterMessage;
