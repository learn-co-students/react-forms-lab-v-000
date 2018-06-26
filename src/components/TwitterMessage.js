import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ' ',
      length: 0
    };


  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      length: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <span>{this.props.maxChars - this.state.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
