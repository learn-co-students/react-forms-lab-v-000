import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charsUsed: 0,
      message: ""
    };
  }

  handleCharCountChange = (event) => {
    this.setState({
      charsUsed: event.target.value.length,
      message: event.target.value
    })
  
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          value={this.state.message}
          onChange={this.handleCharCountChange} />
        <em>{this.props.maxChars - this.state.charsUsed}</em>
      </div>
    );
  }
}

export default TwitterMessage;
