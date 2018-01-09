import React from 'react';

const countWords = (line) => {
  if (line){
    return line.split(' ').filter(ascii => {return ascii}).length;
  } else {
    return -1;
  }
 
}

const isPoemValid = (poem) => {
  let valid = false;
  if (poem){
    const lines = poem.split('\n').filter(line => {return line});
    const isValidLineNumber = 3 === lines.length;
    const isValidFirstLine = 5 === countWords(lines[0]);
    const isValidSecondLine = 3 === countWords(lines[1]);
    const isValidThirdLine = 5 === countWords(lines[2]);
    if (isValidLineNumber && isValidFirstLine && isValidSecondLine && isValidThirdLine){
      valid = true;
    }
  }
  
  return valid;
}
class PoemWriter extends React.Component {
  
  constructor() {
    super();

    this.state = {
      text: "",
      isValid: true
    };
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
      isValid: isPoemValid(event.target.value)
    });
  }
  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.text}
          onChange={this.handleChange}
        />
        {!this.state.isValid && <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
        
      </div>
    );
  }
}

export default PoemWriter;