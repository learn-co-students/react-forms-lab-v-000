import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      content: '',
      remainingChars: props.maxChars
    };
  }
  
  handleChange = (e) => {
    const maxChars = this.props.maxChars;
    const userInput = e.target.value;
    
    if(userInput.length < maxChars) {
      this.setState({
        content: userInput ,
        remainingChars: maxChars - userInput.length
      })
    }
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.content} onChange={this.handleChange} />
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
