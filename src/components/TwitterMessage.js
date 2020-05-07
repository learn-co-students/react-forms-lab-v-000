import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charsLeft: 280
    };
  }

  handleTextChange = event => {
    let input = event.target.value
    this.setState({
      text: input,
      charsLeft: (this.state.charsLeft - input.length)
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTextChange(event)} value={this.state.text} />
        <p>Characters Left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
