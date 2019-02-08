import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:{this.props.maxChars}</strong>
        <input type="text" id="message" onChange={event =>
          this.handleFirstNameChange(event)} value={this.state.firstName}values={this.props.maxChars} />
      </div>
    );
  }
}

export default TwitterMessage;
