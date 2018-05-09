import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  };

  remainingChars = () => {
    let chars = this.state.value.length;
    return this.props.maxChars - chars;
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <div>{this.remainingChars()}</div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;
