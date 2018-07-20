import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  }
  render() {
    console.log("props", this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.text}
        onChange={this.handleChange} />
        <div>{this.props.maxChars - this.state.text.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
