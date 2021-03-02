import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charsLeft: 280
    };
  }

  handleChange = event => {    
		this.setState({      
			message: event.target.value
		})  
    this.handleCharCount(event.target.value)
	} 

  handleCharCount = value => {
    const maxChars = this.props.maxChars;
    const charCount = value.length;
    const charsLeft = maxChars - charCount;
    this.setState({charsLeft})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
        onChange={event => this.handleChange(event)}
        value={this.state.message}
        />
        <p>{this.state.charsLeft} charaters remaining</p>
      </div>
    );
    
  }
}

export default TwitterMessage;
