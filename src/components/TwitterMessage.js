import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	maxChars: props.maxChars,
	message: '',
    };
    
  }

  handleInputDecrement = event => {
    this.setState({
      maxChars: this.props.maxChars - event.target.value.length,
      message: event.target.value,
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={event => this.handleInputDecrement(event)} value={this.state.message}/>
	    <p>Remaining: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
