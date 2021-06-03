import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        message: ""
    };
  }
  handleMessage=(event)=>{
    this.setState({
        message: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" id="message"
        onChange={this.handleMessage}
        value={this.state.message}
         />
         <p>{this.props.maxChars - this.state.message.length} remaining chars</p>
      </div>
    );
  }
}

export default TwitterMessage;
