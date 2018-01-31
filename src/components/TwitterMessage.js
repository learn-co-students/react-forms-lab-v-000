import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      remainingChars: 140,
    };
    //again, line 11 only needed for debugging.
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    // debugger;
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <p>Max chars: {this.props.maxChars} </p>
        <p>You have {this.state.remainingChars} char left. </p>
      </div>
    );
  }
}

export default TwitterMessage;
