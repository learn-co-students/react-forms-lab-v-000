import React, { Component } from "react";

export default class TwitterMessage extends Component {
  constructor() {
    super();

    this.state = { message: "" };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={event => this.setState({ message: event.target.value })}
          value={this.state.message}
        />
        <br />
        Characters left = {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}
