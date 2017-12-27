import React from 'react';

function isAPoem(poem){
  const lines = poem.split('\n')
  let wordsPerLine = [];
  if (lines.length === 3){
    for(let i = 0; i < 3; i++){
      wordsPerLine.push(lines[i].split(/\b\s\b/).length)
    }
  }
  return (wordsPerLine[0] === 5 && wordsPerLine[1] === 3 && wordsPerLine[2] === 5) ? true : false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      isValid: false
    };
  }

  inputChange = event => {
    this.setState({
      value: event.target.value,
      isValid: isAPoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.inputChange}
        />
        { !this.state.isValid &&
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
