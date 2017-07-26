import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
    
    this.createTweet = this.createTweet.bind(this);
  }
  
  createTweet = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          value={ this.state.value }
          onChange={ this.createTweet }
        />
        <p>{ this.props.maxChars - this.state.value.length } characters left</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number
};

TwitterMessage.defaultProps = {
  maxChars: 140
};

export default TwitterMessage;