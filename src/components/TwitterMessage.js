import React from "react";

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:{this.charsRemaining}</strong>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <span>Characters Remaining: {this.props.maxChars - this.state.text.length}</span>
      </div>
    );
  }
}