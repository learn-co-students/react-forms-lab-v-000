import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  remainingChars = (string, maxChars) => {
    let currChars = string.length;

    return maxChars - currChars;
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    });

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleMessageChange}/>
        <p>Characters Remaining: {this.remainingChars(this.state.message, this.props.maxChars)}</p>
      </div>
    );
  }
}

export default TwitterMessage;
