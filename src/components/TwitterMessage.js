import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    this.setState({charsLeft: this.props.maxChars - this.state.message.length})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
