import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  }

  typingTweet = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.inputValue} onChange={this.typingTweet} />
        <p>{this.props.maxChars - this.state.inputValue.length} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;