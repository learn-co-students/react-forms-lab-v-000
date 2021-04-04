import React, { useDebugValue } from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  render() {
    return (
      <div>
          <strong>Your message:</strong>
          <input type="text" name="message" id="message" 
           value={this.state.message}
           onChange={this.handleChange}/>
           {this.props.maxChars - this.state.message.length} chars left
      </div>
    );
  }
}

export default TwitterMessage;
