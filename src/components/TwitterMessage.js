import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      length: 0,
    };
  }

  handleChange = event => {
   const message = event.target.value;
    const length = message.length;
    this.setState({
      value: event.target.value,
      length: length,
    });

  }



  render() {
const length = this.props.maxChars - this.state.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.props.maxChars}</p>
        <p>Message: {this.state.value}</p>
        <p>Length: {length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
