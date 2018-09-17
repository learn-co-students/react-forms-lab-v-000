import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft: this.props.maxChars,
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={(event) => {this.handleChange(event)}} value={this.state.message} />
        <p>{this.state.charsLeft} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
