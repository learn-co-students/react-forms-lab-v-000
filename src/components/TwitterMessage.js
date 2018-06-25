import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      maxChars: 140
    };
  }

  countChars = event => {
    this.setState({
      value:  event.target.value,
      maxChars: this.state.maxChars -= 1
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.countChars} value={this.state.value}/>
        <p>{this.props.maxChars}</p>
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
