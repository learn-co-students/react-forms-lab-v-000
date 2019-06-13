import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

  this.state = {
      message: '',
    };
  }

  handleMessage = (event) => {
    this.setState({
      message: event.target.value,
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {this.props.maxChars-this.state.message.length}
        <input type="text" name="message" id="message" onChange={event => this.handleMessage(event)} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
