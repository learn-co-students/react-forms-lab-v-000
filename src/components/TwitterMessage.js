import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetContent: "",
      charsLeft: this.props.maxChars
    };
  }

  updateTweet = (e) => {
    this.setState({
      tweetContent: e.target.value,
      charsLeft: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateTweet} type="text" value={this.state.tweetContent}/>
        <p>Remaining Characters: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;