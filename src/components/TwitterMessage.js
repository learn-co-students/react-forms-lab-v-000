import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charsRemaining: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      charsRemaining: --this.state.charsRemaining
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.value} onChange={this.handleChange} type="text" /><small  onChange={this.handleChange}>{this.state.charsRemaining} characters remaining</small>
      </div>
    );
  }
}

export default TwitterMessage;
