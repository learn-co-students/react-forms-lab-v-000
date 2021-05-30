import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    //set initial state
    this.state = {
      message: ""
    };
  }

  handleFormChange = (event) => {
    //in order to generalize method to apply if there were other attributes
    const name = event.target.name
    const value = event.target.value //incoming message

    //adjust state
    this.setState({
      [name]: value
    }, () => console.log(this.state))
  // keep track of what the user typed in 
  }

  //event.target is the input
  //event.target.value is what we are capturing

  render() {
    let charactersLeft = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleFormChange} value={this.state.message}/>
        {charactersLeft}
      </div>
    );
  }
}

export default TwitterMessage;
