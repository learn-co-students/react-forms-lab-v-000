import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      maxChars: 140
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      maxChars: 140 - event.target.value.length,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange}
        /><br></br>
          <p>Charachters Remaining: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
