import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      chars: this.props.maxChars
    };
  }
  change = (event) => {
    this.setState({message: event.target.value})
    this.setState({chars: this.state.chars - event.target.value.length})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.change} value={this.state.message}/>
        <p>remaining characters: {this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
