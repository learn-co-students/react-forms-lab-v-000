import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.message = this.message.bind(this);
  }

  message(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.message} />
        <span>{this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number
}
