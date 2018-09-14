import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characterCounter: 0,
      input: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      characterCounter: this.props.maxChars - event.target.value.length,
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <span>{this.props.maxChars} Maximum characters</span>
        <span>{this.state.characterCounter} characters left</span>
      </div>
    );
  }
}

export default TwitterMessage;
