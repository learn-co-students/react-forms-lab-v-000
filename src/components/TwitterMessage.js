import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  updateInput = event => {
    this.setState({
      value: event.target.value,
    })
  }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" 
        id="message" 
        value={this.state.value} 
        onChange={this.updateInput}/>
      </div>
    );
  }
}

export default TwitterMessage;
