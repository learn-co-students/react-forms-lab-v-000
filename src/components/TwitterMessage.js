import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
      length: event.target.value.length
    })
  }

  render() {
    // <p>You have {this.props.maxChars - this.state.length} characters left </p>
    // <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
