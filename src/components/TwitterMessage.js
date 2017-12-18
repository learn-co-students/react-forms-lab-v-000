import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charRemaining: props.maxChars,
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      charRemaining: (this.props.maxChars - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value = {this.state.value} onChange={this.handleChange} type="text" /> <span>{this.state.charRemaining}</span>
      </div>
    );
  }
}

export default TwitterMessage;
