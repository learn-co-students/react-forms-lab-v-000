import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: ''};
  }

  messageChanged = (event)=>{
    if(event.target.value.length <= this.props.maxChars){
      this.setState({value: event.target.value});
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong> <span>{this.props.maxChars- this.state.value.length} characters remaining</span>
        <input type="text" value={this.state.value} onChange={this.messageChanged}/>
      </div>
    );
  }
}

export default TwitterMessage;
