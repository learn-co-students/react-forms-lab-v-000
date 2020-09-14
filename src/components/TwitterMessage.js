import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  updateInput = event => {
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length 
    })
  }
  
  render() {
    console.log("form props", this.props)
    console.log("form state", this.state)

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" 
        id="message" 
        value={this.state.value} 
        onChange={this.updateInput}/>
        <p>You have "{this.state.remainingChars}" of {this.props.maxChars} characters remaining...</p>
      </div>
    )
  }
}

export default TwitterMessage;
