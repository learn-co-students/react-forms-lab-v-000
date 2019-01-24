import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charsLeft: 140,
      message: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      charsLeft: 140 - event.target.value.length,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleInputChange} />
        <br />
        <small><em>Remaining Characters: {this.state.charsLeft}</em></small>
      </div>
    );
  }
}

export default TwitterMessage;
