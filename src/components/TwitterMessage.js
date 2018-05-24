import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  changeStateHandler = (event) => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.changeStateHandler} value={this.state.message} />
        <p>{this.state.message}</p>
        <p>{this.props.maxChars - this.state.message.length} remaining characters...</p>
      </div>
    );
  }
}

export default TwitterMessage;
