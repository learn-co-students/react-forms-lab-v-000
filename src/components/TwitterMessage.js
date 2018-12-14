import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  // handleChange = event => {
  //   this.setState({
  //     message: event.target.value
  //   })
    
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
            type="text" 
            value={this.state.message}
            onChange={event => { this.setState({message: event.target.value}) }} />
              {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;

//         {this.props.maxChars-this.state.message.length}
  // countCharacters = () => {
  //     console.log(this.props.maxChars - this.state.message.length)
  // }

// onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
//         {this.props.maxChars-this.state.message.length}
//because callback prop is needed to send data back up to parent. That's why not separate functions 

// maxChars: 140

// charCount = 140 - value.count