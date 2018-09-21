import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event =>this.setState({message:event.target.value})} value={this.state.message}/>
        <strong>words left: {this.props.maxChars-this.state.message.length} </strong> 
      </div>
    );
  }
}

export default TwitterMessage;
