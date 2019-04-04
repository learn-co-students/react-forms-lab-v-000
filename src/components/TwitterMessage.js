import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:"Hello YOU GUYS"
    };
  }

  handleMessageChange = event => {
      this.setState({
        message: event.target.value
      })
    }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={ event => this.handleMessageChange(event)} value={this.state.message} />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
