import React from 'react';
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  state = {
    message: '',
  };

  changeMessage = e => {
    const { value } = e.target;
    this.setState({
      message: value,
    });
  };

  render() {
    const { message } = this.state;
    const { maxChars } = this.props;
    const charsLeft = maxChars - message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={message} onChange={this.changeMessage} />
        <span>{charsLeft}</span>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
};

export default TwitterMessage;
