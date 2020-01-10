import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: this.props.maxChars,
      counter: 0
    };
  }

  handleChange = (event) => {
    const eventTargetValue = event.target
    this.setState((previousState) => {
      return (
        {
          message: eventTargetValue.value,
          remainingChars: eventTargetValue.value.length < previousState.message.length ? previousState.remainingChars + 1 : previousState.remainingChars - 1,
          counter: eventTargetValue.value.length < previousState.message.length ? previousState.counter - 1 : previousState.counter + 1
        }
      );
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)} />
        <div>
          <p>{this.state.remainingChars} characters left</p>
        </div>
        <div>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
