import React from 'react';
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
         value={this.state.message}
         onChange={this.handleChange} />
         {/* shows the remaining characters */}
         <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

//set proptype
TwitterMessage.propTypes = {
  maxChars: PropTypes.number
}

//set the default of the prop, which is maxChars
TwitterMessage.defaultProps = {
  maxChars: 140
}

export default TwitterMessage;
