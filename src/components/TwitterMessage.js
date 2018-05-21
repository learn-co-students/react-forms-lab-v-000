import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  changeMessage = e => {
    this.setState({
      value: e.target.value
    })
  }

  remaining = () => {
    return this.props.maxChars - this.state.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.changeMessage}/>
        <p>{this.remaining()} letters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
