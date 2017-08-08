import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
  
    
    
    this.state = {
      _remaining_characters: 0,
      value: ''
    };


  }

  handleChange = event => {
    
    this.setState({      
      _remaining_characters: this.props.maxChars - event.target.value.length,
      value: event.target.value
    });
    console.log(event.target.value.length)
  }

  render() {
    
    return (            
      <div>
        <strong>Your message:</strong>
        <input 
        type="text"         
        onChange={this.handleChange}        
        value = {this.state.value}
        />
        <div>
          <p> Characters remaining: {this.props.maxChars - this.state.value.length }</p>
        </div>
      </div>
    );
  }
}

export default TwitterMessage;