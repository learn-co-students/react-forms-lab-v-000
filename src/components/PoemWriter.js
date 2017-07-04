import React from 'react';


function validateInput(input) {
  const lines = input.split('\n');
  const lineCount = lines.length === 3;
  const wordCount = count(lines[0]) === 5 && count(lines[1]) === 3 && count(lines[2]) === 5;
  return lineCount && wordCount;
}

function count(line) {
  return line.split(' ').filter(n => n).length;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: '',
      isValid: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }



  handleInputChange(event) {
    const value = event.target.value 
    if (value) {
      this.setState({
        chars: value,
        isValid: validateInput(value),
      })
    }
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60"
          onChange={this.handleInputChange} 
          value={this.state.chars}
        ></textarea>
        
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}

      </div>
    );
  }
}

export default PoemWriter;