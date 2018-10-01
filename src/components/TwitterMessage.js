import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleInput = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInput} value={this.state.message}/>
        <p>You have {this.props.maxChars - this.state.message.length} character(s) remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;