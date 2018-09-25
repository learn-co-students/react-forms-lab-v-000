import React, {Component} from "react";

class TwitterMessage extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }
  handleChange = event =>{
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        <p>Remaining Character: {this.props.maxChars-this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
