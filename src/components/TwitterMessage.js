import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charRemaining: this.props.maxChars
    };
  }

  handleMessage = (e) => {
    this.setState({message: e.target.value, charRemaining: this.props.maxChars - e.target.value.length})
    //if this.state.charCount === 140, stop adding char?
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={e => this.handleMessage(e)}/>
        <p><em>(characters remaining: {this.state.charRemaining})</em></p>
      </div>
    );
  }
}

export default TwitterMessage;
