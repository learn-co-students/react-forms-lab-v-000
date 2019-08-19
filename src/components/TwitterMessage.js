import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
  }
}

  handleChange = (event) =>  {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message} 
          onChange={this.handleChange} />
        <p>Remaining Characters {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}


export default TwitterMessage;
