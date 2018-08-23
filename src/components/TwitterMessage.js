import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: this.props.maxChars,
      letters: ''
    };
  }

  showRemainingChars = event => {
    let newCharValue = 140 - event.target.value.length
    this.setState({
      remainingChars: newCharValue,
      letters: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.letters} onChange={event => this.showRemainingChars(event)} />
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
