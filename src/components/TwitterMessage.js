import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingChars: props.maxChars
    };
  }

  handleChange = (event) => {
    let val = event.target.value;
    let remaining = this.props.maxChars - val.length;

    this.setState({
      value: val,
      remainingChars: remaining,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange} />
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
