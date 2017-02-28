const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
    this.setMessage = this.setMessage.bind(this);
  }

  setMessage(e){
    this.setState({
      message: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.setMessage} />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
