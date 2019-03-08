import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charLength: this.props.maxChars,
      message: ''
    };
  }

  handleChange = event => {
    const message = event.target.value
    this.setState({
      charLength: this.props.maxChars - message.length,
      message: message
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        {this.state.charLength}
      </div>
    );
  }
}

export default TwitterMessage;
