import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChars: this.props.maxChars,
      message: "",
      charLeft: this.props.maxChars,
    };
  }

  changeInput = (e) => {
    let message = e.target.value
    let array = message.split("")
    let number = array.length
    let charsLeft = this.state.maxChars - number
    this.setState({
      message: e.target.value,
      charLeft: charsLeft,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={(e) => this.changeInput(e)}></input>
        <div>Characters Left: {this.state.charLeft}</div>
      </div>
    );
  }
}

export default TwitterMessage;
