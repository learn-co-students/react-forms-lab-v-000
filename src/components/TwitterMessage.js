import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charsRemaining: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      charsRemaining: this.props.maxChars - event.target.value.length,
    });
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>Total Characters Available: {this.props.maxChars}</p>
        <p>Characters remaining: {this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
