import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      maxChars: this.props.maxChars
    };
  }

  handleChange =(e) => {
    if(this.props.maxChars - this.state.value.length > 0){
      this.setState({
        value: e.target.value,
        maxChars: this.props.maxChars - e.target.value.length
      })
    }    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>

        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        {this.state.maxChars} Characters Remaining
      </div>
    );
  }
}

export default TwitterMessage;