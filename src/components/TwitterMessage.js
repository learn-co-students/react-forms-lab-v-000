import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charsLeft: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      charsLeft: (this.props.maxChars - e.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/> {this.state.charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;
