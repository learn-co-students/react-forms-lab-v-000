import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      length: 0
    };
  }

  handleChange = event => {
    this.setState({
      length: event.target.value.length,
      message: event.target.value
    }, console.log(this.state.message))
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        <hr />
        Characters Left: {this.props.maxChars - this.state.length}
      </div>
    );
  }
}

export default TwitterMessage;
