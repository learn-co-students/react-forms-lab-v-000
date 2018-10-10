import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleInputChange = (event) => {
    this.setState ({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.input} onChange={event => this.handleInputChange(event)} />
        <p>Remaining Characters: {this.props.maxChars - this.state.input.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
