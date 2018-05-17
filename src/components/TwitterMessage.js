import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textMessage: ''
    };
  }
  handleMessage = (event) => {
    this.setState({
      textMessage: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessage} value={this.state.textMessage}/>
        <h4>Remaining characters: {this.props.maxChars - this.state.textMessage.length} </h4>
      </div>
    );
  }
}

export default TwitterMessage;
