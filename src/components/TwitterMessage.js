import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>{this.props.maxChars-this.state.message.length} characters are left </p>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
}

export default TwitterMessage;
