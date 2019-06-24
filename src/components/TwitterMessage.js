import React, { Component } from "react";

export default class TwitterMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChars: 140,
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      maxChars: 140 - e.target.value.length,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.handleChange}/>
        <p>{this.state.maxChars}</p>
    </div>
    );
  }
}
