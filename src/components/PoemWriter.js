import React from 'react';

function validate_poem(poem) {
  const haikuLines = poem.split('\n');

  const wordsPerLine = haikuLines.map((line) => {
    return line.trim().split(" ")
  });
  return (haikuLines.length === 3) && (wordsPerLine[0].length === 5 && wordsPerLine[1].length === 3 && wordsPerLine[2].length === 5)
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false,
    };
    this.writePoem = this.writePoem.bind(this);
  }

  // const error = document.getElementById('poem-validation-error')
  // error.innerHTML = ''
  //g.innerHTML = splitPoem

  writePoem(event) {
    const poem = event.target.value;
    this.setState({
      poem: poem,
      valid: validate_poem(poem)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value= {this.state.poem}
          onChange= {this.writePoem}
        />
       { !this.state.valid ? <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
        : null }
      </div>
    );
  }
}
