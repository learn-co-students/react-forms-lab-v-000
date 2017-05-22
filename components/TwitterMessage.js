import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.remainingChars = this.remainingChars.bind(this);

    this.state = {
      value: '',
    };
  };

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  };

  remainingChars() {
    var charsRemaining = this.props.maxChars - this.state.value.length;
    return charsRemaining;
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <span>You have {this.remainingChars()} left</span>
      </div>
    );
  }
}
