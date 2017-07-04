import React from 'react';
import PropTypes from 'react'

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };

    this.newMessage = this.newMessage.bind(this)
  }


  newMessage (ev){
    console.log('test', ev.persist);
    this.setState({
      message: ev.target.value
    })
    // console.log("test2", ev.target);
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.newMessage} />
        <span>{this.props.maxChars -this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;

TwitterMessage.defaultProps ={
  maxChars: 140
}

TwitterMessage.propTypes ={
  maxChars: PropTypes.number
}
