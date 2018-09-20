import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      // App passes down the character limit
      chars: this.props.maxChars
    };
  }

  handleMessage = event => {
    this.setState(
      {message: event.target.value}
    )
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleMessage(event)}  value={this.state.message}/>
        <p>Characters remaining: {this.state.chars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
