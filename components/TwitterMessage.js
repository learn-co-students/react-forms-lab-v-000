const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.maxChars
    };

    this.updateCharsLeft = this.updateCharsLeft.bind(this);
  }

  updateCharsLeft(event) {
    this.setState({
      value: this.props.maxChars - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateCharsLeft} type="text" />
        <small>{this.state.value} characters left</small>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
  value: React.PropTypes.string
}

module.exports = TwitterMessage;
