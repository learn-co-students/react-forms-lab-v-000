import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleCharCount = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    let remainingChars = this.props.maxChars - this.state.value.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleCharCount} />
        <p>{remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
