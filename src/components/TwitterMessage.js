import React from 'react';
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    }
    );
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.msg}/>
        <p>{this.props.maxChars- this.state.msg.length}</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
}

TwitterMessage.defaultProps = {
  maxChars: 140,
}

export default TwitterMessage;
