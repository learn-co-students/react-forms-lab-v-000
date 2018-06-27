import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ' ',
      maxChars: 140
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
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>Max Characters: {this.props.maxChars}</p>
        <p>{this.state.maxChars - this.state.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
