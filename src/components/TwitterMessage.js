import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingChar: this.props.maxChars
    };
  }

  handleChange = event => {
    var char = event.target.value
    this.setState({
      value: char,
      remainingChar: this.props.maxChars - char.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <span>{this.state.remainingChar}</span>
      </div>
    );
  }
}

export default TwitterMessage;
