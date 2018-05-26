import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remaining: 140
    }
  }

  handleChange = e => {
    const remaining = 140 - e.target.value.length

    this.setState({
      value: e.target.value,
      remaining: remaining
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.value} onChange={this.handleChange} type="text" />
        <p>Remaining characters: {this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
