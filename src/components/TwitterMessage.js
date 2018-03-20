import React from 'react'
import PropTypes from 'prop-types'

export default class TwitterMessage extends React.Component {
  constructor () {
    super()

    this.state = {
      tweet: ''
    }
  }

  setTweet = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }

  render () {
    return (
      <div>
        <strong>Your message:</strong>
        <input type='text' value={this.state.tweet} onChange={this.setTweet} />
        <strong>{this.props.maxChars - this.state.tweet.length}</strong>
      </div>
    )
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number
}

TwitterMessage.defaultProps = {
  maxChars: 280
}
