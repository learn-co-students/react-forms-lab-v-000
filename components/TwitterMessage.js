import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: props.maxChars,
      message: ''
    };

    this.handleMessageInput = this.handleMessageInput.bind(this);
  }

  handleMessageInput(event) {
    this.setState({
      remainingChars: this.props.maxChars - event.target.value.length,
      message: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.message}
          onChange={this.handleMessageInput} />
        <strong>Remaining Characters: {this.state.remainingChars}</strong>
      </div>
    );
  }
}
