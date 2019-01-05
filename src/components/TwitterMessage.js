import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      // charsLeft: {this.props.maxChars}
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        <p> {this.props.maxChars - this.state.message.length} characters remaining </p>
      </div>
    );
  }
}

export default TwitterMessage;
