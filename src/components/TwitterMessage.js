import React from 'react';
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value : ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value}/>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars : PropTypes.number
}

export default TwitterMessage;
