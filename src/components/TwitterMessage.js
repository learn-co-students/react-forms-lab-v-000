import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsRemaining: props.maxChars
    };
  }

  handleChange = (e) => (
    this.setState({
      message: e.target.value,
      charsRemaining: this.props.maxChars - e.target.value.length
    }, () => console.log(this.state))
  )

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <div>{this.state.charsRemaining}</div>
      </div>
    );
  }
}

export default TwitterMessage;
