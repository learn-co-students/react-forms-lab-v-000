import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
  this.setState({
    value: event.target.value,
  });
}

  maxChars = () => {
    maxChars: this.props.maxChars - value
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxChars={this.props.maxChars} value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
