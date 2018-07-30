import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msgValue: ''
    };
  }

  handleChange = event => {
    this.setState({
      msgValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.msgValue} onChange={this.handleChange} />
        Characters Remaining: {this.props.maxChars - this.state.msgValue.length}
      </div>
    );
  }
}

export default TwitterMessage;
