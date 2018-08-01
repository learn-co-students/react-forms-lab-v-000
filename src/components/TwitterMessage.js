import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      charLeft: 0,
    };
  }

  handleTweetText = event => {
    this.setState({
      value: event.target.value,
    });

  }

  render() {

    this.props.maxChars;

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleTweetText(event)} value={this.state.value} />
        {/* <p onClick={this.charCounter}>{this.charLeft}</p> */}
        <button>{this.props.maxChars - this.state.value.length}</button>
      </div>
    );
  }
}

export default TwitterMessage;
