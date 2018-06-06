import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      charsLeft: props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      charsLeft: this.state.charsLeft - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
