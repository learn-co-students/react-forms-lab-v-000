import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      charsRemaining: this.props.maxChars,
      charCount: 0,
    };
  }
  
  handleChange=(event)=>{
    const textLength=event.target.value.length;
    const charsRem=parseInt(event.target.maxLength,10)-parseInt(textLength,10);
    this.setState({
      text: event.target.value,
      charsRemaining: charsRem,
      charCount: textLength,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" className={this.state.charCount} value={this.state.text} maxLength={this.props.maxChars} onChange={this.handleChange} />
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
