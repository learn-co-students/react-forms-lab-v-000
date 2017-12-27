import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }
  
  handleTweet = event => {
    this.setState({
      text: event.target.value
    });

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>You have {this.props.maxChars - this.state.text.length} characters remaining </p>
        <input type="text" value={this.state.text} onChange={this.handleTweet} />
      </div>
    );
  }
}

export default TwitterMessage;
