import React from 'react'

class TwitterMessage extends React.Component {

  constructor(){
    super();

    this.state = {
      message: ""
    }
  }

  setMessage(event){
    this.setState(
      {message: event.target.value}
    )
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.message} onChange={this.setMessage.bind(this)}/>
        <h3>Characters Left: {this.props.maxChars - this.state.message.length}</h3>
      </div>
    )
  }

};

TwitterMessage.defaultProps = {
  maxChars: 140,
};

module.exports = TwitterMessage
