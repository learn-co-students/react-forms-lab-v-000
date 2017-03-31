const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Remaining Characters: {this.props.maxChars - this.state.value.length}</p>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number.isRequired
}

module.exports = TwitterMessage;
