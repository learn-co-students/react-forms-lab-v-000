// This component takes one prop: maxChars which is a number — the maximum amount of characters 
// a message can have. This prop is being passed in from the App component with the value 280.

// You'll find an <input type="text"> in this component. Make this a controlled component 
// by adding the attributes to the <input> element. Its value should be saved in the component's 
// state and should update on every change to the input.

// Show the remaining characters in the component. It doesn't matter how you render it, as long 
// as the number is correct. No need to guard against input that is too long — you can let the 
// counter reach negative values.

// TwitterMessage
// Saving input value in state
//   ✓ should update the state when typing (49ms)
// Character counter
//   ✓ should show the remaining characters counter
//   ✓ should update the counter when typing

import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;