import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingChars: props.maxChars,
      value: ''
  };
  }

  countRemainingChars = (e) => {
    this.setState({
      remainingChars: this.props.maxChars - e.target.value.length,
      value: e.target.value
  })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.countRemainingChars} value={this.state.value}/>
        <h5>{this.state.remainingChars}</h5>
        <h5>{this.props.maxChars}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
