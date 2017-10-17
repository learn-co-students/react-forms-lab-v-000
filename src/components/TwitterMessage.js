import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      remainingChars: 0,
    };
  }

  handleChange = (event) => {
    var tweetLength = event.target.value.length;
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - tweetLength
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <span>{this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
