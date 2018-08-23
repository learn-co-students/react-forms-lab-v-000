import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {remainingChars:props.maxChars, message: ""};
  }

  updateRemaining = (event) => (this.setState({remainingChars: this.props.maxChars - event.target.value.length, message: event.target.value},() => console.log(this.state)));

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.updateRemaining} value={this.state.message} />
        <p>Remaining: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
