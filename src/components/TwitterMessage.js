import React from "react";
import PropTypes from "prop-types";

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: ""};
  }

  newMessage = (event) => {
    this.setState({
        message: event.target.value
    });
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.newMessage}/>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.numbers,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
};
