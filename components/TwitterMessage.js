import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(ev) {
    this.setState({ value: ev.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleInput} />
        <span>{this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number
}

TwitterMessage.defaultProps = {
  maxChars: 140
}
