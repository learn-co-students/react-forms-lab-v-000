import React from "react";
import PropTypes from 'prop-types'

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweet: '', 
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text"
        value={this.state.tweet}
        onChange={this.handleChange}
        />
        <p>{this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140,
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number
}

export default TwitterMessage;
