import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingChars: this.props.maxChars
    };
  }

  updateInput = (e) => {
    let charCount = e.target.value.length
    let remainingChars = (this.props.maxChars - charCount)

    this.setState({
      value: e.target.value,
      remainingChars: remainingChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.updateInput}
        />
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
