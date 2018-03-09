import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charLimit: 140,
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      charLimit: this.state.charLimit - 1,
      message: event.target.value,

    })
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          // message={this.state.value}
          onChange={this.handleChange}
          value={this.state.message} />
          <h6>{this.state.charLimit} characters left</h6>
      </div>
    );
  }
}

export default TwitterMessage;
