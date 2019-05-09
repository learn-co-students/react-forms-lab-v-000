import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      remainingChars: props.maxChars
    };
  }

  handleTrackingRemainingChars = (event) => {
    this.setState({
      message: event.target.value,
      remainingChars: this.state.remainingChars - 1
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleTrackingRemainingChars}/>
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
