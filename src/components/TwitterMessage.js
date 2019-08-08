import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
	maxChars: this.props.maxChars,
	remainingChars: this.props.maxChars,
	value: ""
    };
  }

  updateMaxChars(e){
  
  	/* Get the value of the input element */
	let message = e.target.value 
	
	/* 
	 * Find the reminaing characters left by subtracting the 
	 * message's length by the number of maximum characters. 
	 * 
	 * */

	let currentChars = message.length 
	let remaining = this.state.maxChars - currentChars
	
	/*
	 * 
	 * Update the component's state.
	 *
	 * */
	this.setState({
		remainingChars: remaining, 
		value: message
	});
  }
  render() {
    return (
      <div>
	      <strong>Your message ({this.state.remainingChars} characters remaining) :</strong>
	      <input type="text" name="message" value={this.state.value} id="message"  onChange={this.updateMaxChars.bind(this)} />

{console.log(this.state.value) }
</div>
    );
  }
}

export default TwitterMessage;
