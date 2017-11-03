import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }
 
  handleInputChange = (event) => {
    if(this.state.message.length <= this.props.maxChars){
      this.setState({
        message: event.target.value   
      });
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInputChange} value={this.state.message}/>
        <h3>{this.state.message}</h3>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
