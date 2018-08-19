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
    }, () => {console.log(this.state.messageText)})
  } // NOTE : ShallowWrapper tester apparently needs a callback function, so just added a test console -- https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/setState.md


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
