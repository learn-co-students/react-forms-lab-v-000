import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super();

    this.state = {
      value: '',
      remainingCharacters: props.maxChars
    };
  }

  calculateRemainingChars = (e) => {
      this.setState({
        value: e.target.value,
        remainingCharacters: this.state.remainingCharacters - e.target.value.length
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.calculateRemainingChars} />
        <p> Remaining Characters: {this.state.remainingCharacters} </p>
      </div>
    );
  }

}

export default TwitterMessage;
