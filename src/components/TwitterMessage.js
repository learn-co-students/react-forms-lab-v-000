import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      chars: 0
    };
  }

  updateMessage = (event) => {
    this.setState({
      message: event.target.value,
      chars: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.updateMessage(event)} value={this.state.message}/>
        <p>{this.props.maxChars - this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
