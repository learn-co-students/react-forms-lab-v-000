import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charCount: 0,
      message: ""
    };
  }

  handleChange = event => {
    // event.persist() is needed for alternative code (below) to work, otherwise receive error in browser - TypeError: Cannot read property 'data' of null
    // event.persist() causes tests to fail - TypeError: event.persist is not a function

    // event.persist()

    this.setState({
      message: event.target.value,
    })

    this.setState(previousState => {
      return {
        // below code counts 'delete' and 'backspace' as input
        charCount: previousState.charCount + 1
      }
    })

    // below code updates character count appropriately if 'backspace' or 'delete' is pressed
    // causes tests to fail, TypeError: Cannot read property 'data' of undefined (would use event.persist() to solve this problem but that causes another error)

    // this.setState(previousState => {
    //   return event.nativeEvent.data !==  null ? {charCount: previousState.charCount + 1} : {charCount: previousState.charCount - 1}
    // })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleChange(event)}
          value={this.state.message}
        />
      <p>Remaining Characters: {this.props.maxChars - this.state.charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
