import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        value: '',
        remainingChar: props.maxChars
      };
    }

    handleChange = event => {
      this.setState({
        value: event.target.value,
        remainingChar: this.state.remainingChar - 1
      });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.remainingChar}</p>
      </div>
    );
  }
}

export default TwitterMessage;
