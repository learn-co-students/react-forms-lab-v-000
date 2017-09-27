import React from 'react';
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {maxChars: 200,}

TwitterMessage.PropTypes = {maxChars: PropTypes.number,}

export default TwitterMessage;
