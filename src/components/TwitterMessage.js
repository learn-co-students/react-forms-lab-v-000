import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      charsLeft: this.props.maxChars
    };
  }

  handleChange = (e) => {
    var charsTyped = e.target.value
    this.setState({
      charsLeft: this.props.maxChars - charsTyped.length,
      text: e.target.value
    });
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.text} name="text" onChange={this.handleChange}></input>
        <p class="characterCounter">Character counter: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
