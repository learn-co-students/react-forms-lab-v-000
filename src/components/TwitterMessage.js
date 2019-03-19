import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      content: '', 
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
      
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.content} onChange={event => this.handleChange(event)}
          />
        <p>Remaining characters: {this.props.maxChars - this.state.content.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
