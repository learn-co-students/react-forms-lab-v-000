import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: '',
  maxChars: 140};
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
      maxChars: 140-e.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}  />
        <p>Characters Remaingings: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
