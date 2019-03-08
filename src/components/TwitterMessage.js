import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  change = e => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.change}
        />
      <strong>Remaining Characters: {this.props.maxChars-this.state.message.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
