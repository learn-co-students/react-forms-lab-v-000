import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }
  handleChange = (event) => {
    this.setState(
      {
        value: event.target.value,
      })
  }

  render() {
    return (
      <div>
        <strong>Your message: </strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <p>Characters Left: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
