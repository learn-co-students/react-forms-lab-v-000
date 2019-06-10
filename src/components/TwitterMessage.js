import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: 140,
      value: ''
    };
  }
  handleChange = event => {
    this.setState({
      value: event.target.value,
      maxChars: 140 - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
         name="message"
          id="message"
          value={this.state.value}
          onChange={this.handleChange} />
          <p>{this.state.maxChars} remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
