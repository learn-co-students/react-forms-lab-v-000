import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingLength: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      remainingLength: this.state.remainingLength - 1
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value= {this.state.value} onChange={this.handleChange} />
        <strong>{this.state.remainingLength}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
