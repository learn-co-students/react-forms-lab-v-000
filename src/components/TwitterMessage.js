import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  absorbMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          max={this.props.maxChars}
          onChange={this.absorbMessage}
          value={this.state.message}
        />
        <label>{this.props.maxChars - this.state.message.length}</label>
      </div>
    );
  }
}

export default TwitterMessage;
