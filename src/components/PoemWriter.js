import React from 'react';

//String.prototype.lines = function() { return this.split(/\r*\n/); }
//String.prototype.lineCount = function() { return this.lines().length; }

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function validPoem(poem) {
  const poemLines = poem.split('\n').filter(l => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return isRightAmountOfLines && hasRightAmountOfWords;
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValidPoem: false,
    };
  }

  handleChangePoem = (event) => {
    if (event.target.value){
      this.setState({
        poem: event.target.value,
        isValidPoem: validPoem(event.target.value),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChangePoem}/>
        {!this.state.isValidPoem ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

export default PoemWriter;
