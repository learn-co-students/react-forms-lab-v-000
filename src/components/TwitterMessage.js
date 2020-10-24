import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      maxchars: 280
    };
  }

  handleInputChange = event => {
    // debugger
    this.setState({
      message: event.target.value,
      maxchars: this.state.maxchars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <p>{this.state.maxchars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
