const React = require('react')

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChage = this.handleChange.bind(this);
    this.state = {maxChars: 140};
  }

  handleChange(event) {
    this.setState(
      {
        maxChars: maxChars - event.target.value.length,
      });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>Characters left: {this.state.maxChars} </p>
      </div>
    );
  }
}


module.exports = TwitterMessage;
