import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: ''
    };

    this.setMsg = this.setMsg.bind(this)
  }

  setMsg(e) {
    this.setState({
      msg: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={ this.state.msg } onChange={ this.setMsg }/>
        <p>{ this.props.maxChars - this.state.msg.length }</p>
      </div>
    );
  }

}