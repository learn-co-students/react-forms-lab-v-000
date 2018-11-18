import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange = {event => this.setState({message: event.target.value})} value={this.state.message}/>
        <p>Remaining Characters: {this.props.maxChars - this.state.message.length}</p>
        <p>{this.state.message}</p>      
      </div>
    );
  }
}

export default TwitterMessage;
