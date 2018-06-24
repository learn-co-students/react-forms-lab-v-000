import React from "react";
import PropTypes from 'prop-types'

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet:'',
    };
  }
  handleInputChange = event => {
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
          onChange={this.handleInputChange}
          value={this.state.tweet}
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
