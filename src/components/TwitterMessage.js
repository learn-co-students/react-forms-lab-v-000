import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      value: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  updateCounter = () => {
    return this.props.maxChars - this.state.value.length;
  };

  changeHandler = event => {
    this.setState = {
      value: event.target.value
    };
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.updateCounter()} characters left.</p>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={event => this.changeHandler(event)}
        />
      </div>
    );
  }
}

export default TwitterMessage;
