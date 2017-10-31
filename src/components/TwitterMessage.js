import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      warning: false,
      outOfChars: false
    };
  }


  handleChange = event => {
    this.setState({
      value: event.target.value,
      warning: characterCheck(event.target.value),
      outOfChars: noMoreChars(event.target.value)
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value = {this.state.value} onChange = {this.handleChange} />

        <p style={this.state.warning ? {color:'red'} : {color:'blue'}}>Characters Left: {this.props.maxChars - this.state.value.length}</p>

        {this.state.outOfChars ? <p style={{color:'red'}}>YOU'RE OUT OF CHARACTERS!</p>: null }
      </div>
    );
  }
};

var noMoreChars = (chars) => { if (chars.length > 140){return true} }
var characterCheck = (chars) =>{ if (chars.length >= 130){return true} }
