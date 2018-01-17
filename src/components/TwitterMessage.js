import React from "react";
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  setMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.setMessage}/>
        <p>{this.props.maxChar - this.state.message.length}</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChar: PropTypes.number
}

TwitterMessage.defaultProps = {
  maxChar: 140
}

export default TwitterMessage;


/*
Open the components/TwitterMessage.js file.
This component takes one prop, maxChars, which is a number representing the maximum amount of characters a message can have.
You'll find an <input type="text"> in this component. Make this a controlled component by adding the necessary props to the <input> element. Its value should be saved in the component's state.
Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. No need to guard against input that is too long — you can let the counter reach negative values.

*/