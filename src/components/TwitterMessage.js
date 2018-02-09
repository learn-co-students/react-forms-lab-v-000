import React from "react";
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleInput = (e) => {
    console.log(this.state)
    this.setState({
      message: e.target.value
    });
  }

  render() {
    var charCompare = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleInput}
        /><br />
        <p>{charCompare >= 0 ?
          <small style={{color: "green"}}>{charCompare} characters remaining for current message.</small> :
          <small style={{color: "red"}}>{Math.abs(charCompare)} characters beyond the 140 char max!!!</small>
        }</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140,
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
}



export default TwitterMessage;
