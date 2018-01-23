import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        value: "",
        chars_left: 140
      }
  }

  handleChange = event => {
    let input = event.target;
    debugger;
    this.setState({
      value: event.target.value,
      chars_left: this.props.maxChars - input.textLength,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <small>{ this.props.maxChars - this.state.value.length }</small>
      </div>
    );
  }
}

export default TwitterMessage;
