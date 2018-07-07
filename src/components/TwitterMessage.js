import React from "react";
import PropTypes from "prop-types";


class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

    handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          />
          <p>{this.props.maxChars - this.state.text.length}</p>
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
