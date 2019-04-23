import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInputChange} type="text" name="message" id="message" value={this.state.message} />
        <p><i>Characters Remaining: {this.props.maxChars-this.state.message.length}</i></p>
      </div>
    );
  }
}


export default TwitterMessage;
