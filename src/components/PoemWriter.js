import React from 'react';

function numberOfWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(content){
  const lines = content.split('\n').filter(l => l)
  const isRightLineNumber = lines.length === 3
  const isRightNumberOfWords = numberOfWords(lines[0]) === 5 && numberOfWords(lines[1]) === 3 && numberOfWords(lines[2]) === 5;
  return isRightLineNumber && isRightNumberOfWords;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
      isValid: false,
    };
  }

  textChangeHandler = (e)=> {
    if (e.target.value) {
      this.setState({
        isValid: isValidPoem(e.target.value),
        textValue: e.target.value,
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.textValue} onChange={this.textChangeHandler}
        />
      {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

export default PoemWriter;
