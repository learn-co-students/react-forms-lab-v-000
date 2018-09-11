import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      remainingChars: props.maxChars
    };
  }

  handleChange = (event) => {
    let currentChars = event.target.value;
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - currentChars.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.handleChange} value={this.state.message} maxLength={this.props.maxChars} />
        Remaining Chars: {this.state.remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
