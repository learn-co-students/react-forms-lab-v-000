import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      remainCharacter: this.props.maxChars
    };
  }

  handlechange = (event) => {
    if (this.state.remainCharacter > 0) {
      this.setState({
        message: event.target.value,
        remainCharacter: this.props.maxChars - event.target.value.length
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={event => this.handlechange(event)}/>
        <p>Character remaining: {this.state.remainCharacter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
