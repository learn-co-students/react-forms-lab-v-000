import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "Type Here",
    };
  }

wordListener = (e) => {
  this.setState({
    message: e.target.value
  })
}


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.wordListener} />
        <strong>Max Characters:</strong>
        {this.props.maxChars}
        <strong>Characters Left:</strong>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
