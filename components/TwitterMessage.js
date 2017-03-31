const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.updateState} />
        <small>{this.props.maxChars - this.state.value.length} characters left</small>
      </div>
    );
  }
}

module.exports = TwitterMessage;
