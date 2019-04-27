import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    //set initial state to empty string
    this.state = {
      message: ''
    };
  }

  //update state with every change of input
  handleChange = event => {
    this.setState({
    message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message} //tie value of form to state to make controlled
        onChange={event => this.handleChange(event)}   //add event listener & call handleChange()
        />
        {/*show remaining characters in the component using maxChars props from app minus the message length*/}
        <p>Characters Left: {this.props.maxChars - this.state.message.length}</p> 
      </div>
    );
  }
}

export default TwitterMessage;
