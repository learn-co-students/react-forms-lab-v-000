import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

   handleChangeText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

   showCharacters = () => {
    //console.log(this.state.text.length)
    var remChars = this.props.maxChars - this.state.text.length
    return remChars
  }	  
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChangeText(event)} value={this.state.text}/>
        <p>Remaining Characters: {this.showCharacters()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
