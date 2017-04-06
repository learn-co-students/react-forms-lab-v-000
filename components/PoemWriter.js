import React from 'react';

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(poem) {
  const poemLines = poem.split('\n').filter(l => l);
  const isRightAmountOfLines = poemLines.length === 3;
  const hasRightAmountOfWords = countWords(poemLines[0]) === 5 &&
                                countWords(poemLines[1]) ===3 &&
                                countWords(poemLines[2]) === 5;

  return isRightAmountOfLines && hasRightAmountOfWords;
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {poem: '', isValid: false};
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const poem = event.target.value
    if(poem) {
      this.setState({
        poem: poem,
        isValid: isValidPoem(poem)
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.onChange}/>
        { !this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null }
      </div>
    );
  }
}
