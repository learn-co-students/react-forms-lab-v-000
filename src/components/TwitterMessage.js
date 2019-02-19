import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }




  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessage} value={this.state.message}/>

        <p> Remaing Characters: {this.props.maxChars - this.state.message.length} </p>
      </div>

    );
  }
}

export default TwitterMessage;
