// This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have. 
// This prop is being passed in from the App component with the value 140.

// You'll find an <input type="text"> in this component. Make this a controlled component by adding the attributes to the <input> element.
// Its value should be saved in the component's state and should update on every change to the input.

// Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. 
// No need to guard against input that is too long — you can let the counter reach negative values.
import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = { 
      message: 'Hello World',
      remainingChars: props.maxChars
    };
  }

  handleChange = (event) => {
    let currentChars = event.target.value;
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - currentChars.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.handleChange} value={this.state.message} maxLength={this.props.maxChars} />
        Remaining Chars: {this.state.remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
