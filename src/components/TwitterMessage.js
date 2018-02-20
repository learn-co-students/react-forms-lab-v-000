import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      chars_left: 140
    };
  }
  
  maxChars = event => {
    var input = event.target.value;
    this.setState({
      chars_left: 140 - input.length,
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text" 
        value={this.state.value}
        onChange={this.maxChars.bind(this)}
        />
        <p>Characters Left: {this.state.chars_left}</p>
      </div>
    );
  }
}

export default TwitterMessage;
