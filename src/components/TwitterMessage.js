import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageText: ''
    };
  }
  
  
  updateText = (event) => {
    this.setState({
      messageText: event.target.value
    }, console.log(this.state.messageText))
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="messageText" value={this.state.messageText} onChange={this.updateText}/>
        <label>{this.props.maxChars - this.state.messageText.length}</label>
      </div>
    );
  }
}

export default TwitterMessage;
