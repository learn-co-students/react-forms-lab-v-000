import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ''
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
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessageChange}/>
        <span>Remaining Characters: {this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
