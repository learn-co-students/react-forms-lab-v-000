import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeMessage: '',
    };
  }

  handleMessage = e => {
    this.setState({
      typeMessage: e.target.value,
    })
  } 

  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.handleMessage(e)} value={this.state.typeMessage}>
        </input>
        <p>{this.props.maxChars - this.state.typeMessage.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
