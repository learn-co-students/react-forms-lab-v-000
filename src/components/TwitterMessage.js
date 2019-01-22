import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charsLeft: 140,
      message: '' // the text field <input> is initially blank (empty string)
    };
  }

  handleInputChange = (event) => {
    this.setState({
      charsLeft: 140 - event.target.value.length,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleInputChange} />
        <br/>
        <small><em>Remaining characters: {this.state.charsLeft}</em></small>
      </div>
    );
  }
}

export default TwitterMessage;

{/*
// The TwitterMessage component takes one prop: maxChars, which is a number — the maximum
// amount of characters a message can have. This prop is being passed in from the
// App component with the value 140.

// 3. You'll find an <input type="text"> in this TwitterMessage component. Make this a
// controlled component by adding the attributes to the <input> element. Its
// value should be saved in the component's state and should update on every
// change to the input.

// 4. Show the remaining characters in the component. It doesn't matter how you
// render it, as long as the number is correct. No need to guard against input that
// is too long — you can let the counter reach negative values.
*/}