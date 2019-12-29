import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: props.maxChars,
      message: ''
    };
  }

  checkChars = e => {
    let input = e.target.value
    this.setState(previousState => {
      return {
        chars: previousState.chars - input.length,
        message: input
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.checkChars(event)} value={this.state.message} />
        <p>{ this.state.chars }</p>
      </div>
    );
  }
}

export default TwitterMessage;
