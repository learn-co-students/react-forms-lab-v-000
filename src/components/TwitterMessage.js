import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  calculateChars = () => {
    return <div><span>{this.state.message} {this.state.maxChars - this.state.message.length}</span></div>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={this.handleChange} value={this.state.message}/>
        {this.calculateChars()}
      </div>
    );
  }
}

export default TwitterMessage;
