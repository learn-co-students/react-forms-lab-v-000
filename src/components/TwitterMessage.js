import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      charsLeft: props.maxChars,
    };
  }

  setChars = (event) => {
    var input = event.target.value;
    this.setState({
      value: input,
      charsLeft: (this.state.charsLeft - input.length),
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value= {this.state.value} onChange = {this.setChars} />
        <p> {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
