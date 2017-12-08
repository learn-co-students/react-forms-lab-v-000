import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={this.handleChange} 
          type="text"
          value={this.state.value}
           />
        <div>{this.state.charsLeft ? this.state.charsLeft : this.props.maxChars} left</div>
      </div>
    );
  }
}

export default TwitterMessage;
