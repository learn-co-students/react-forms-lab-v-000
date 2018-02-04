import React from "react";

class TwitterMessage extends React.Component {

  constructor(num){
    super();
    this.state = {
      maxChars: num,
      }
    }


   handleChange = event => {
     this.setState({
       maxChars: event.target.vlue,
     })
   }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
         value={this.state.maxChars}
         onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
