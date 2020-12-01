import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChars: this.props.maxChars,
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      maxChars: this.state.maxChars - 1,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
        <div>Remaining characters: {this.state.maxChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
