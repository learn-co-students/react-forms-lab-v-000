import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingCharacters: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      remainingCharacters: this.props.maxChars - event.target.value.length
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
        >{this.state.remainingCharacters}</input>
      </div>
    );
  }
}

export default TwitterMessage;
