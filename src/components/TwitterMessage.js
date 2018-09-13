import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
   
    this.state = {
      message: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      message: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleInputChange} />
        <small>{this.props.maxChars - this.state.message.length} characters left</small>
      </div>
    );
  }
}

export default TwitterMessage;
