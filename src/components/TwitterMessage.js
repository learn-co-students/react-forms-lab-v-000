import React from "react";
import PropTypes from 'prop-types'

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
    
  TwitterMessage.propTypes = {
      maxChars: (props, propName) => {
          const maxChars = props[propName];
          
          if (maxChars === undefined) {
              return new Error('Your message must have content to post!')
          }
          
          const isValidLength = maxChars > 0 && maxChars < 140;
          
          if (!isValidLength) {
              return new Error('You post must be greater than 0 characters and less than 140 characters.')
          }  
      }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
