import React from "react";

  
const validatePoem = (input) => {
    let poemArray = input.split("\n");
    if (poemArray.length === 3) {
      if (poemArray[0].trim().split(' ').length === 5 && poemArray[1].trim().split(' ').length === 3 && poemArray[2].trim().split(' ').length ===5 ) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
}
  


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }
  

  handleChange = event => {
    this.setState({
      value: event.target.value,
      isValid: validatePoem(event.target.value)
    });
    
  }
  


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        
        {!this.state.isValid ?  (<div id="poem-validation-error" style={{ color: "red" }} >This poem is not written in the right structure!</div>) : (<div>yes</div>)}
        
      </div>
    );
  }
}

export default PoemWriter;
