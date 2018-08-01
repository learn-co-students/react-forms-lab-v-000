import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charactersLeft: props.maxChars
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value,
      charactersLeft: this.props.maxChars - e.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id='twitterMessage' value={this.state.message} onChange={this.handleMessageChange}/>
        <small>Characters Left: {this.state.charactersLeft}</small>
      </div>
    );
  }
}

export default TwitterMessage;
