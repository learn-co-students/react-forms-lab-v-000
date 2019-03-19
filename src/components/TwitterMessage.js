import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message : "",
      charsLeft: 140
    };
  }


  handleMessageChange = event => {
    debugger;
    this.setState({
      message: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleMessageChange(event)} value={this.state.message} />
        <p>You have {this.state.charsLeft} Characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
