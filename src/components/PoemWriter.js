import React from 'react';

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(content) {
  const lines = content.split("\n").filter(l => l)
  if (
      lines.length === 3 &&
      countWords(lines[0]) === 5 &&
      countWords(lines[1]) === 3 &&
      countWords(lines[2]) === 5
      ) {
      return true;
    }
 return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };

    this.poemTextChange = this.poemTextChange.bind(this);
  }

  poemTextChange = event => {
    const content = event.target.value
    if (content) {
      this.setState({
        value: content,
        isValid: isValidPoem(content),
      });
    }
  } 

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          placeholder="Your magnificent poetry here"
          value={this.state.value} 
          onChange={this.poemTextChange}
        />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

export default PoemWriter;