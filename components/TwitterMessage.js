import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetMsg: "",
    };

    this._setTweetMsg = this._setTweetMsg.bind(this)
  }

  _setTweetMsg(event) {
    this.setState({
      tweetMsg: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweetMsg} onChange={this._setTweetMsg}/>
        <p>{this.props.maxChars - this.state.tweetMsg.length}</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number
}
TwitterMessage.defaultProps = {
  maxChars: 140
}
