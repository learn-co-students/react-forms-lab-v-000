import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // new code
      message: "Type your tweet here."
      // end of new code
    };
  }
  
  // new code
  characterWatcher = event => {
    this.setState({
      message: event.target.value
    })
  }
  // end of new code
  
  render() {
    // new code inside <input> added value={this.state.message}, onChange
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.characterWatcher}/>
        <p>Max characters</p>
        {this.props.maxChars}
        <p>Remainig characters</p>
        {this.props.maxChars - this.state.message.length}
        
      </div>
    );
  }
}

export default TwitterMessage;
