import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      remainingChars: 140
    };
  }

  something = event => {
    debugger
    this.setState({
      message: event.target.value,
      remainingChars: this.state.remainingChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.something(event)} value={this.state.message}/>
        <strong>{this.state.remainingChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
