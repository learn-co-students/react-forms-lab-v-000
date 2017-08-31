import React from 'react';
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: ''
    }
  }

  handleChange = event => {
    this.setState({
      chars: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.chars}
        />
        <p>{this.props.maxChars - this.state.chars.length}</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140
};

TwitterMessage.propTypes = {
  maxChars: PropTypes.number
};

export default TwitterMessage;
