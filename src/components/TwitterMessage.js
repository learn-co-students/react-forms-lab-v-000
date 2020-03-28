import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { maxChars } = this.props;
    const { message } = this.state;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={message}
        />
        <small>
          Remaining characters {maxChars - message.length}/{maxChars}
        </small>
      </div>
    );
  }
}

export default TwitterMessage;
