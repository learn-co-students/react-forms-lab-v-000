import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      warning: false
    };
  }


  handleChange = event => {
    this.setState({
      value: event.target.value,
      warning: characterCheck(event.target.value)
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value = {this.state.value} onChange = {this.handleChange} />

        <p style={this.state.warning ? {color:'red'} : {color:'blue'}}>Characters Left: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}


var characterCheck = (chars) =>{ if (chars.length >= 130){return true} }

export default TwitterMessage;
