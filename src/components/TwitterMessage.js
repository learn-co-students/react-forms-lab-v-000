import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event =>this.handleChange(event)} value={this.state.message} name="message" id="message" />
        <p>You have {this.props.maxChars - this.state.message.length} characters left!</p>
      </div>
    );
  }
}

export default TwitterMessage;
