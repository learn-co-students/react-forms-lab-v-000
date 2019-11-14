import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: ""
    };
  }

  handleTextChange = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  countInputChars = () => {
    return (
      <p>Chars left: {this.props.maxChars - this.state.userInput.length}</p>
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTextChange(event)} value={this.state.userInput} />
        {this.countInputChars()}
      </div>
    );
  }
}

export default TwitterMessage;
