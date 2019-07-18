import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      remainingChars: 140,
      textInput: ''
    };
  }


  handleChange = event => {
    const input = event.target.value;
    this.setState(
      {
        remainingChars: 140 - input.length,
        textInput: input
      }
    )
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {/* Make this a controlled component by adding the attributes to the <input> element. 
        Its value should be saved in the component's state and should update on every change 
        to the input. */}
        <input type="text" name="message" id="message" value={this.state.textInput} onChange={this.handleChange} />
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
