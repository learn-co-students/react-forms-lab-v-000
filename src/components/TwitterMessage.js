import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      length: 0
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
      length: event.target.value.length
    })
    console.log(this.state.length)
  }

  render() {

    return (
      <div>
        <strong>Your message:</strong>
      {/* You don't need to set the message length as part of the constructor, you can just access that value directly
         <p>You have {this.props.maxChars - this.state.length} characters left </p>
         <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
      */}
        <input type="text" onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
