import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
      length: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      tweet: event.target.value,
      //length: event.target.value.length, <--redundant
    });
  }

  render() {
    return (
      <div>
        <div>Characters left: {this.props.maxChars - this.state.tweet.length}</div>
        <strong>Your message: </strong>
        <input type="text" value={this.state.tweet} onChange={this.handleChange} />
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140,
}

export default TwitterMessage;
