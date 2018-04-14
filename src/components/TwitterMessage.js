import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange = (event) => {
    if (this.state.value.length < this.props.maxChars) {
      this.setState({
        value: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Characters Remaining: {this.props.maxChars - this.state.value.length}</strong><br />
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
