import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
      inputChars: 0
    };
  }
  handleChange(event){
    this.setState({
      inputChars: event.target.value.length,
      value: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.props.maxChars - this.state.inputChars} characters left</p>
      </div>
    );
  }
}
