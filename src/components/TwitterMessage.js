import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      chars: "",
      totalChars: 0
    };
  }
  handleChange = (event) =>{
    this.setState({      
        chars: event.target.value,
        totalChars: event.target.value.length
      })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.chars} onChange={this.handleChange}/>
        < strong > Characters Remaining - {
          this.props.maxChars - this.state.totalChars
        } < /strong>
      </div>
    );
  }
}

export default TwitterMessage;
