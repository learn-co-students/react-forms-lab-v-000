import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value:'',
      remainingCharacters: props.maxChars
    };
  }

  calculateRemaining = (f) => {
    this.setState({
      value: f.target.value,
      remainingCharacters: this.state.remainingCharacters - f.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type = "text" value={this.state.value} onChange={this.calculateRemaining} />
        <p> Remaining Characters: {this.state.remainingCharacters} </p>
      </div>
    );
  }
}

export default TwitterMessage;
