import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  };

  handleChange = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    }, ()=> console.log(this.state.message))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"  name="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
        <p>Characters remaining: {this.props.maxChars - this.state.message.length}</p>
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
