import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      remainingChars: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      remainingChars: --this.state.remainingChars
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>Remaining characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
